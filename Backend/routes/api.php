<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ListingController;

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


Route::get('/listings', [ListingController::class, 'index'])->name("listing.index");
Route::get('/listings/{id}', [ListingController::class, 'show'])->name("listing.show");

Route::put('/listing/create', [ListingController::class, 'store'])->name("listing.store");
Route::PATCH('/listing/update/{id}', [ListingController::class, 'update'])->name("listing.update");
Route::delete('/listings/{id}', [ListingController::class, 'destroy'])->name("listing.destroy");

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
