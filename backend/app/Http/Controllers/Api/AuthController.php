<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Resources\UserResource;
use App\Mail\ResetPasswordMail;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(RegisterRequest $request): JsonResponse
    {
        $user = User::create([
            'name' => $request->string('name')->toString(),
            'email' => $request->string('email')->toString(),
            'password' => $request->string('password')->toString(),
            'intended_plan' => $request->input('intended_plan', 'basic'),
        ]);

        return $this->tokenResponse($user, remember: false, status: 201);
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $user = User::query()->where('email', $request->string('email')->toString())->first();

        if (! $user || ! Hash::check($request->string('password')->toString(), $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Those details do not match our records.'],
            ]);
        }

        $user->tokens()->where('name', 'web')->delete();

        return $this->tokenResponse($user, (bool) $request->boolean('remember'));
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()?->currentAccessToken()?->delete();

        return response()->json([
            'message' => 'You have been logged out.',
        ]);
    }

    public function user(Request $request): UserResource
    {
        return new UserResource($request->user());
    }

    public function forgotPassword(ForgotPasswordRequest $request): JsonResponse
    {
        $email = $request->string('email')->toString();
        $user = User::query()->where('email', $email)->first();

        if ($user) {
            $token = Password::broker()->createToken($user);
            $url = rtrim((string) config('tagtails.frontend_url'), '/').'/new-password?token='.$token.'&email='.urlencode($user->email);

            if (app()->environment(['local', 'staging', 'testing'])) {
                cache()->put('dev_reset_url:'.$user->email, $url, now()->addHour());
            }

            Mail::to($user->email)->send(new ResetPasswordMail($user->name, $url));
        }

        $payload = [
            'message' => 'If that email is registered, we have sent a reset link.',
        ];

        if (app()->environment(['local', 'staging', 'testing'])) {
            $payload['dev_reset_url'] = cache()->get('dev_reset_url:'.$email);
        }

        return response()->json($payload);
    }

    public function resetPassword(ResetPasswordRequest $request): JsonResponse
    {
        $status = Password::reset(
            $request->only('email', 'password', 'token'),
            function (User $user, string $password): void {
                $user->forceFill([
                    'password' => $password,
                    'remember_token' => Str::random(60),
                ])->save();

                $user->tokens()->delete();
            }
        );

        if ($status !== Password::PASSWORD_RESET) {
            throw ValidationException::withMessages([
                'email' => ['This reset link is invalid or has expired.'],
            ]);
        }

        return response()->json([
            'message' => 'Your password has been updated. You can log in now.',
        ]);
    }

    private function tokenResponse(User $user, bool $remember, int $status = 200): JsonResponse
    {
        $expiresAt = $remember ? now()->addDays(30) : now()->addDays(7);
        $token = $user->createToken('web', ['*'], $expiresAt)->plainTextToken;

        return response()->json([
            'user' => (new UserResource($user))->resolve(),
            'token' => $token,
            'expires_in_days' => $remember ? 30 : 7,
        ], $status);
    }
}
