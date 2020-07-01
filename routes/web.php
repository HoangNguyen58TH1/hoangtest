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

Route::get('/', function () {
    // return view('welcome');
    return redirect('login');
});
Route::get('/vue', function () {
    return view('vue');
});
Route::get('/frontend', function () {
    return view('frontend');
});

Auth::routes();
// Route::get('/random','HomeController@random');

Route::get('/home', 'HomeController@index')->name('home');
// Route::get('/register', 'HomeController@index2')->name('regiter');
