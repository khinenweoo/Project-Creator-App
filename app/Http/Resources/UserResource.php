<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'member_id' => $this->user_id,
            'name' => $this->name,
            'email' => $this->email,
            'password' => $this->password,
            'joined_date' => (new Carbon($this->joined_date))->format('Y-m-d'), 
            'username' => $this->username,
            'phone_number' => $this->phone_number,
            'profile_image' => $this->profile_image? Storage::disk('r4')->get($this->profile_image) : '',
            'company' => $this->company,
            'occupation' => $this->occupation,
            'department' => $this->department,
            'description' => $this->description,
        ];
        
    }
}
