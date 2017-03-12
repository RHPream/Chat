<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }
    public function message($request)
    {
        $mssage = new Message();
        $mssage->user_id = 1;
        $mssage->receiver_id = 2;
        $mssage->message = $request;
        $mssage->seen = 1;
        $mssage->save();
        return ['status'=>'Done'];
    }
}
