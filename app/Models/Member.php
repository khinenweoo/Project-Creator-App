<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'username',
        'password',
        'profile_image',
        'phone',
        'email',
        'join_date',
        'company',
        'address',
        'occupation',
        'bio',
        'created_by',
        'updated_by'
    ];

}
