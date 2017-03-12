<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class Message extends Model
{
    protected $fillable = [
        'user_id','receiver_id','message','seen'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function reciver()
    {
        return $this->belongsTo(User::class);
    }
}
