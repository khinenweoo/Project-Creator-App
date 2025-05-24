<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserCrudResource;
use Carbon\Carbon;
use App\Models\Project;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $authUser = auth()->user();
        $query = Task::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }

        if (request("status")) {
            $query->where("status", request("status"));
        }

        if (request("priority")) {
            $query->where("priority", "like", "%" . request("priority") . "%");
        }

        $tasks = $query->orderBy($sortField, $sortDirection)
            ->paginate(12)
            ->onEachSide(1);

        foreach ($tasks as $key => $task) {
            $created_date = Carbon::parse($task->created_at);
            $due_date = $task->due_date != null ? Carbon::parse($task->due_date) : 0;

            $month_duration = $created_date->diffInMonths($due_date);

            $days_duration = '';
            if ($month_duration < 1) {
                // $days_duration = $due_date->addDays() . ' Days';
                $days_duration = $due_date->diffInDays() . ' Days';
            }
            $task->duration = $days_duration != '' ? $days_duration : $month_duration . ' Months';
        }


        return inertia("Task/Index", [
            "tasks" => TaskResource::collection($tasks),
            "queryParams" => request()->query() ?: null,
            "success" => session('success'),
            'user' => new UserCrudResource($authUser),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $projects = Project::query()->orderBy('name', 'asc')->get();
        $users = User::query()->orderBy('name', 'asc')->get();
        $authUser = auth()->user();

        return inertia("Task/Create", [
            'projects' => ProjectResource::collection($projects),
            'users' => UserResource::collection($users),
            'auth' => new UserCrudResource($authUser),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($image) {
            $data['image_path'] = $image->store('task/' . Str::random(), 'public');
            
        }
        Task::create($data);

        return to_route('task.index')
            ->with('success', 'A new Task was created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        $projects = Project::query()->orderBy('name', 'asc')->get();
        $users = User::query()->orderBy('name', 'asc')->get();
        $authUser = auth()->user();
        $projects =  ProjectResource::collection($projects);

        return inertia("Task/Edit", [
            'task' => new TaskResource($task),
            'projects' => ProjectResource::collection($projects),
            'users' => UserResource::collection($users),
            'auth' => new UserCrudResource($authUser),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $data['updated_by'] = Auth::id();
        if ($image) {
            $data['image_path'] = $image->store('task/' . Str::random(), 'public');
            
        }
        $task->update($data);

        return to_route('task.index')
            ->with('success', "Task \"$task->name\" was updated");
    }

    public function updateStatus(Request $request, $taskId)
    {
        $task = Task::findOrFail($taskId);
        $task->status = $request->completed ? 'completed' : $task->status;
        $task->save();

        return to_route('task.index')
            ->with('success', "Task \"$task->name\" was completed.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $name = $task->name;
        $task->delete();
        if ($task->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($task->image_path));
        }
        return to_route('task.index')->with('success', "Task \"$name\" was deleted");
    }
}
