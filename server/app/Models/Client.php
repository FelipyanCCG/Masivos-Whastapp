<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;

class Client extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'status',
        'token',
        'phone_id'
 
    ];
    public function setTokenAttribute($value)
    {
        $this->attributes['token'] = Crypt::encrypt($value);
    }

    // Accessor para descifrar el token cuando se obtiene de la base de datos
    public function getTokenAttribute($value)
    {
        return Crypt::decrypt($value);
    }
    public function messages()
    {
        return $this->hasMany(Message::class);
    }

}
