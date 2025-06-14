<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\TasksResource;
use App\Http\Resources\UserCrudResource;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $authUser = auth()->user();
        $query = Project::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }

        if (request("status")) {
            $query->where("status", request("status"));
        }
        
        // show only posts that assigned to the auth user
        if ($authUser->is_admin == 0) {
            $projects = $authUser->projects()? $authUser->projects()->orderBy($sortField, $sortDirection)
                ->paginate(12)
                : [];

        } else {
            $projects = $query->orderBy($sortField, $sortDirection)
                ->paginate(12) ?? [];
        }


        foreach ($projects as $key => $project) {
            $created_date = Carbon::parse($project->created_at);
            $due_date = $project->due_date != null ? Carbon::parse($project->due_date) : null;
        
            if ($due_date) {
                $month_duration = $created_date->diffInMonths($due_date);
                $days_duration = '';
        
                if ($month_duration < 1) {
                    // Calculate the difference in days
                    $days_duration = $created_date->diffInDays($due_date) . ' Days';
                }
        
                // Set the duration based on the calculated values
                $project->duration = $days_duration != '' ? $days_duration : $month_duration . ' Month';
            } else {
                $project->duration = 'No due date';
            }
        
            // tasks count
            $project->tasks_count = $project->tasks->count();
            $assignUserCount = 0;

            foreach ($project->tasks as $key => $task) {

                if ($task->assignedUser) {
                    $assignUserCount += 1;
                }
            }
            // assigned user count
            $project->assign_users = $assignUserCount;
        }
            
        return inertia("Project/Index", [
            "projects" => ProjectResource::collection($projects),
            "queryParams" => request()->query() ?: null,
            'success' => session('success'),
            'user' => new UserCrudResource($authUser),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $authUser = auth()->user();
        return inertia("Project/Create", [
            'auth' => new UserCrudResource($authUser),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        $data['status'] = $data['status']['code'];

        if($image) {
           $data['image_path'] = $image->store('project/'.Str::random(), 'r4');
        }

        Project::create($data);

        return to_route('projects.index')->with('success', 'Project was created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $query = $project->tasks();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }

        if (request("status")) {
            $query->where("status", request("status"));
        }

        $tasks = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("Project/Show", [
            "project" => new ProjectResource($project),
            "tasks" => TasksResource::collection($tasks),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        $authUser = auth()->user();
        return inertia('Project/Edit', [
            'project' => new ProjectResource($project),
            'auth' => new UserCrudResource($authUser),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();

        $image = $data['image'] ?? null;
        $data['updated_by'] = Auth::id();
        $data['status'] = $data['status']['code'];

        if ($image) {
            if ($project->image_path) {
                Storage::disk('r4')->deleteDirectory(dirname($project->image_path));
            }
            $data['image_path'] = $image->store('project/' . Str::random(), 'r4');
        }
        $project->update($data);

        return to_route('projects.index')
            ->with('success', "Project \"$project->name\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $name = $project->name;
        $project->delete();
        if ($project->image_path) {
            Storage::disk('r4')->deleteDirectory(dirname($project->image_path));
        }
        return to_route('projects.index')->with('success', "Project \"$name\" was deleted");
    }
}
