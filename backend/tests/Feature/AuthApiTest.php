<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Password;
use Tests\TestCase;

class AuthApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_guest_can_register_with_a_plan(): void
    {
        $response = $this->postJson('/api/register', [
            'name' => 'Alex Taylor',
            'email' => 'alex@example.com',
            'password' => 'secret123',
            'intended_plan' => 'annual',
        ]);

        $response->assertCreated()
            ->assertJsonPath('user.email', 'alex@example.com')
            ->assertJsonPath('user.intended_plan', 'annual')
            ->assertJsonStructure(['token', 'user' => ['id', 'name', 'plan']]);

        $this->assertDatabaseHas('users', [
            'email' => 'alex@example.com',
            'intended_plan' => 'annual',
        ]);
    }

    public function test_a_user_can_log_in_and_fetch_their_profile(): void
    {
        $user = User::factory()->create([
            'email' => 'owner@example.com',
            'password' => 'secret123',
        ]);

        $login = $this->postJson('/api/login', [
            'email' => 'owner@example.com',
            'password' => 'secret123',
        ]);

        $login->assertOk()->assertJsonPath('user.email', $user->email);

        $this->withToken($login->json('token'))
            ->getJson('/api/user')
            ->assertOk()
            ->assertJsonPath('email', $user->email);
    }

    public function test_login_rejects_invalid_credentials(): void
    {
        User::factory()->create(['email' => 'owner@example.com']);

        $this->postJson('/api/login', [
            'email' => 'owner@example.com',
            'password' => 'wrong-password',
        ])->assertUnprocessable();
    }

    public function test_a_registered_user_receives_a_staging_reset_link(): void
    {
        $user = User::factory()->create(['email' => 'owner@example.com']);

        $this->postJson('/api/forgot-password', [
            'email' => $user->email,
        ])->assertOk()
            ->assertJsonPath('message', 'If that email is registered, we have sent a reset link.')
            ->assertJsonStructure(['dev_reset_url']);
    }

    public function test_password_can_be_reset(): void
    {
        $user = User::factory()->create(['email' => 'owner@example.com']);
        $token = Password::broker()->createToken($user);

        $this->postJson('/api/reset-password', [
            'email' => $user->email,
            'token' => $token,
            'password' => 'newpass99',
        ])->assertOk();

        $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'newpass99',
        ])->assertOk();
    }

    public function test_plans_are_public(): void
    {
        $this->getJson('/api/plans')
            ->assertOk()
            ->assertJsonPath('plans.0.id', 'basic')
            ->assertJsonPath('tags.free_tags_per_order', 3)
            ->assertJsonPath('tags.postage_gbp', 2.99);
    }
}
