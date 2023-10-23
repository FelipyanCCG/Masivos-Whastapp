<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(User $user)
    {
        return UserResource::collection(User::with('messages')->get());
    }
    public function show(User $user)
    {
        return new UserResource($user);


    }
    public function store(StoreUserRequest $request)
    {
        $user = User::create($request->all());

        return response()->json(new UserResource($user), Response::HTTP_CREATED); // HTTP 201
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->all());
        return response()->json(new UserResource($user), Response::HTTP_OK); //200


    }
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT); //204

    }
}

