<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMessageRequest;
use App\Http\Requests\UpdateMessageRequest;
use App\Http\Resources\MessageResource;
use App\Models\Client;
use GuzzleHttp\Exception\ClientException;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function index(Message $request)
    {
        return MessageResource::Collection(Message::with('user')->get());


    }
    public function show(Message $message)
    {
        return new MessageResource($message->load('user'));
    }
    public function store(StoreMessageRequest $request)
    {
        $message = Message::create($request->all());
        return response()->json(new MessageResource($message), Response::HTTP_CREATED); // HTTP 201
    }

    public function update(UpdateMessageRequest $request, Message $message)
    {
        $message->update($request->all());
        return response()->json(new MessageResource($message), Response::HTTP_OK); //200


    }
    public function destroy(Message $message)
    {
        $message->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT); //204

    }
    public function sendMessageTemplate(Request $request)
    {

        $request->validate([
            'client' => 'required|string',
            'phone' => 'required|numeric|regex:/573^\d{9}$/',
            'template' => 'required|string',
            'image' => 'required|string',
            'token' => 'required|string',
        ]);

        $user = auth()->user()->id;

        // Obtener el modelo Client basado en el nombre proporcionado
        $client = Client::where('name', $request->client)->first();

        // Verificar si el cliente y el token son válidos
        if ($client && $client->token == $request->token) {
            $payload = [
                'messaging_product' => 'whatsapp',
                'to' => $request->phone,
                'type' => 'template',
                'template' => [
                    'name' => $request->template,
                    'language' => [
                        'code' => 'es',
                    ],
                    'components' => [
                        [
                            'type' => 'header',
                            'parameters' => [
                                [
                                    'type' => 'image',
                                    'image' => [
                                        'link' => $request->image,
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
            ];

            $url = "https://graph.facebook.com/v17.0/{$client->phone_id}/messages";
            $headers = [
                'Authorization' => 'Bearer ' . $request->token,
                'Content-Type' => 'application/json',
            ];

            try {
                // Enviar la solicitud HTTP utilizando Guzzle
                $wolkvox = new \GuzzleHttp\Client();
                $response = $wolkvox->post($url, [
                    'headers' => $headers,
                    'json' => $payload,
                ]);


                // Verificar si la solicitud fue exitosa

                $data = $response->getBody()->getContents();
                $responseData = json_decode($data, true);
                
                $message = new Message();
                $message->user_id = $user;
                $message->client_id = $client->id;
                $message->messaging_product = $responseData['messaging_product'];
                $message->wa_id = $responseData['contacts'][0]['wa_id'];
                $message->message_id = $responseData['messages'][0]['id'];
                $message->message_status = $responseData['messages'][0]['message_status'];
                $message->code_status = $response->getStatusCode();
                $message->save();


                return response()->json(new MessageResource($message), Response::HTTP_CREATED); // HTTP 201

            } catch (ClientException $e) {
                return response()->json(['error' => $e->getMessage()], $e->getResponse()->getStatusCode());
            } catch (\Exception $e) {
                return response()->json(['error' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        } else {
            // No se encontró al cliente en la base de datos o el token no es válido
            return response()->json(null, Response::HTTP_NOT_FOUND);
        }
    }

}
