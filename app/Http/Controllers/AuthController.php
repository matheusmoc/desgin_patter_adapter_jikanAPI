<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),

        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]); //data
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            // Authentication not passed...
            return response([
                'message' => 'Email ou senha inválidos.'
            ], 422);
        }
        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));


    }


    public function logout(Request $request)
    {
        /** @var User $user */
        $user = $request->user()->currentAccessToken()->delete();

        return response('', 204);
    }
}
