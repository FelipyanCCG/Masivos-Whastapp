<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
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
            'type' => 'Client',
            'attributes' => [
                'Client' => $this->name,
                'status' => $this->status,
                'token' => $this->token,
                'phone_id'=> $this->phone_id,
        
            ],
        ];
    }
}
