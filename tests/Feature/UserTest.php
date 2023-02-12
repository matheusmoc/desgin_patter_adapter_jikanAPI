<?php

namespace Tests\Feature;

use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;
use Illuminate\Support\Str;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_an_action_that_requires_authentication_to_access_api()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
                         ->getJson('/api/animes');

        $response->assertStatus(200);
    }

    public function test_if_user_register_with_all_data_requested(){
        $response = $this->postJson('/api/signup', [
            'name' => 'Matheus',
            'email' => 'test@gmail.com',
            'password' => 'testest@123', // password
            'password_confirmation' => 'testest@123'
        ]);

        $response
            ->assertStatus(200);
    }

    public function test_if_user_login_with_all_data_requested(){
        $response = $this->postJson('/api/login', [
            'email' => 'test@gmail.com',
            'password' => 'testest@123', // password
        ]);

        $response
            ->assertStatus(200);
    }
}
