<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreClientRequest;
use App\Http\Resources\ClientResource;
use App\Models\Client;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ClientController extends Controller
{
    public function index(Client $request)
    {
        return ClientResource::Collection(Client::all());


    }
    public function show(Client $client)
    {
        return new ClientResource($client->load('messages.user'));
    }
    public function store(StoreClientRequest $request)
    {
        $client = Client::create($request->all());
    
        return response()->json(new ClientResource($client), Response::HTTP_CREATED); // HTTP 201
    }

    public function update(Request $request, Client $client)
    {
        $client->update($request->all());
        return response()->json(new ClientResource($client), Response::HTTP_OK); //200


    }
    public function destroy(Client $client)
    {
        $client->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT); //204

    }
}
