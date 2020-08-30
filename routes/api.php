<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function(){
    Route::post('register', 'Api\AuthController@register');
    Route::post('login', 'Api\AuthController@login');
    
    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });
});




Route::middleware('auth:api')->group( function () {

    Route::resource('books', 'Api\BookController');

});

