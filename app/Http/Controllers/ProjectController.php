<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use Carbon\Carbon;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Project::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }

        if (request("status")) {
            $query->where("status", request("status"));
        }

        $projects = $query->orderBy($sortField, $sortDirection)
            ->paginate(10) ?? [];

        
        foreach ($projects as $key => $project) {
            $created_date = Carbon::parse($project->created_at);
            $due_date = $project->due_date != null ? Carbon::parse($project->due_date) : 0;

            $month_duration = $created_date->diffInMonths($due_date);

            $days_duration = '';
            if ($month_duration < 1) {
                $days_duration = $due_date->addDays() . ' Days';
            }
            $project->duration = $days_duration != '' ? $days_duration : $month_duration . ' Month';

            // tasks count
            $project->tasks_count = $project->tasks->count();
        }
            
        return inertia("Project/Index", [
            "projects" => ProjectResource::collection($projects),
            "queryParams" => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        //
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
            'project' => new ProjectResource($project),
            "tasks" => TaskResource::collection($tasks),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return inertia('Project/Edit', [
            'project' => new ProjectResource($project)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
