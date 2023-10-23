<?php

namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Message>
 */
class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'client_id' => \App\Models\Client::all()->random()->id,
            'user_id' => \App\Models\User::all()->random()->id,
            'messaging_product' =>'whatsapp',
            'wa_id' => fake()->e164PhoneNumber,
            'message_id' => fake()->uuid,
            'message_status' => fake()->randomElement(['sent', 'delivered', 'read']),
            'code_status' => fake()->randomElement([200, 201, 404, 500]),
           

        ];
    }
}
