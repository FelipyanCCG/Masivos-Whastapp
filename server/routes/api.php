<?php
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\UserController;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use Illuminate\Http\Request;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', [LoginController::class, 'store']);
Route::apiResource('messages', MessageController::class);
Route::apiResource('clients', ClientController::class);
Route::middleware('auth:sanctum')->group(function () {
 
    Route::apiResource('users',UserController::class);
    Route::post('messages/send-template', [MessageController::class, 'sendMessageTemplate']);
});

