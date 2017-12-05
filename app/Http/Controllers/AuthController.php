<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Validator;

class AuthController extends Controller
{
    public function checkAuth()
    {
        return response()->json(auth()->check());
    }

    public function getAuthInfo()
    {
        return response()->json(auth()->user());
    }

    public function setAuthInfo(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'password' => 'required|min:4',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'message'=> 'Something went wrong!']);
        }

        $authUser              = auth()->user();
        $updatedUser           = User::where('id', $authUser->id)->first();
        $updatedUser->email    = $request->email;
        $updatedUser->password = bcrypt($request->password);
        $updatedUser->save();

        return response()->json(['status' => true, 'message'=> 'Profile successfully updated!']);
    }
}