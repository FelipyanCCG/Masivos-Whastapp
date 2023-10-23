<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\Models\User;

class LoginController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
           
        ]);
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Las credenciales están incorrectas' //422
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        return response()->json([
            'data' => [
                "attributes" => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ],
                'token'=>$user->createToken('app')->plainTextToken,
            ]
        ], Response::HTTP_OK);
    }
}
