<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'type' => 'Message',
            'attributes' => [
                'Client'            => $this->client->name,
                'author'            => $this->user->name,
                'messaging_product' => $this->messaging_product,
                'wa_id'             => $this->wa_id,
                'message_id'        => $this->message_id,
                'message_status'    => $this->message_status,
                'code_status'    => $this->code_status,

            ],
        ];
    }
}
