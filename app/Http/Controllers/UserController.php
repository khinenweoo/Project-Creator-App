<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserCrudResource;
use App\Http\Resources\UserEditResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = User::query();
        $authUser = auth()->user();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("email")) {
            $query->where("email", "like", "%" . request("email") . "%");
        }

        $users = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("User/Index", [
            "users" => UserResource::collection($users),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            'auth' => new UserCrudResource($authUser),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("User/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        $image = $data['profile_image'] ?? null;
        $generatedId = '';
        $file_name = '';

        $lastUserId = User::orderBy('id', 'desc')->first()?->user_id;

        if (isset($lastUserId)) {
            // Extract numeric part by removing the prefix 'M'
            $idNumeric =  (int) substr($lastUserId, 1);
            $newIdNumber = $idNumeric + 1; // format in the helper function
        } else {
            $newIdNumber = 1;
        }
        $generatedId = generateUserId($newIdNumber);
        $data['user_id'] = $generatedId;

        if($image) {
            $file_name = $image->store('user/'.Str::random(), 'public');
        }

        User::create([
            'user_id' => $generatedId,
            'name' => $data['name'],
            'email' => $data['email'],
            'password' =>  bcrypt($data['password']),
            'email_verified_at' => time(),
            'username' => $data['username'],
            'joined_date' => $data['joined_date'],
            'phone_number' => $data['phone_number'],
            'profile_image'=> $file_name?? '',
            'company' => $data['company'],
            'occupation' => $data['occupation'],
            'department' => $data['department'],
            'description' => $data['description'],
        ]);
        
        return to_route('user.index')
            ->with('success', 'A new member created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return inertia('User/Edit', [
            'user' => new UserEditResource($user),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        $image = $data['new_profile'] ?? null;
        if($image) {
            $data['profile_image'] = $image->store('user/'.Str::random(), 'public');
        }
        $user->update($data);

        return to_route('user.index')
            ->with('success', "User \"$user->name\" was updated.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {

        try {
            $name = $user->name;
            // Optionally delete related records here if not using cascading deletes
            // $user->tasks()->delete(); // If have a tasks relationship
            $user->delete();
            return to_route('user.index')
                ->with('success', "User \"$name\" was deleted");
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return back()->withErrors(['error' => 'Failed to delete user.']);
        }

    }
}
