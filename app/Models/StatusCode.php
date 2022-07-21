<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusCode extends Model
{
    use HasFactory;

    const FALSE = 0;
    const TRUE = 1;
    const LARAVEL_VALIDATION_ERROR = 2;
    const EXCEPTION = 3;
}
