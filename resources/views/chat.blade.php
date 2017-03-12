@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-xs-8 col-xs-offset-2">
                <div class="panel panel-default">
                    <chat-log :messages="messages"></chat-log>
                    <chat-composer v-on:sendmessage="messageAdd"></chat-composer>
                </div>
            </div>
        </div>
    </div>

@endsection
