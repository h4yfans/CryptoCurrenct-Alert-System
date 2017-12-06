<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group(['middleware' => ['auth']], function () {
    Route::get('/', function () {
        return view('home');
    });

    Route::get('/check-auth', 'AuthController@checkAuth');
    Route::get('/get-user-info', 'AuthController@getAuthInfo');
    Route::post('/change-auth-info', 'AuthController@setAuthInfo');

});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
