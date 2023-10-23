<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => ucfirst(fake()->word()),
            'status'=> $this->faker->randomElement(['active', 'inactive']),
            'token' => fake()->uuid(),
            'phone_id' => $this->faker->randomNumber(9),
      
        ];
    }
}
