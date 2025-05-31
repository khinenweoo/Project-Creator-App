<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => ["required", "string", "max:255"],
            "email" => ["required", "string", "email"],
            "username" => ["required", "string", "max:255"],
            'joined_date' => ['required', 'date'],
            "phone_number" => ['nullable', 'string'],
            "new_profile" => ['nullable', 'image'],
            "company" => ["required", "string", "max:255"],
            "occupation" => ['nullable', 'string'],
            "department" => ['nullable', 'string'],
            "description" => ['nullable', 'string'],
        ];
    }
}
