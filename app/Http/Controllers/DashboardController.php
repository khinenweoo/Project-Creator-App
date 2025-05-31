<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\UserCrudResource;
use App\Models\Project;
use App\Models\Task;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $authUser = auth()->user();

        if ($authUser->is_admin === 0) {
            // Projects created by the authenticated user
            $createdProjects = Project::where('created_by', $authUser->id)->pluck('id');
            // Projects assigned to the authenticated user
            $assignedtaskProjects = Task::where('assigned_user_id', $authUser->id)->distinct('project_id')->pluck('project_id');

            $project_array = collect([$createdProjects, $assignedtaskProjects]);
            $unique_projects = $project_array->flatten()->unique();

            // progress and completed projects
            $progressProjects = Project::whereIn('id', $unique_projects)->where('status', 'in_progress')->count();
            $completedProjects = Project::whereIn('id', $unique_projects)->where('status', 'completed')->count();
 
            // Total projects count
            $totalProjectsCount = $unique_projects->count();

            // Tasks created by the authenticated user
            $createdTasks = Task::where('created_by', $authUser->id)->pluck('id');
            // Tasks assigned to the authenticated user
            $assignedTasks = Task::where('assigned_user_id', $authUser->id)->distinct('id')->pluck('id');

            $task_array = collect([$createdTasks, $assignedTasks]);
            $unique_tasks = $task_array->flatten()->unique();

            // Total tasks count
            $totalTasksCount = $unique_tasks->count();
        } else {
            $totalProjectsCount = Project::count();
            $totalTasksCount = Task::count();
            $progressProjects = Project::where('status', 'in_progress')->count();
            $completedProjects = Project::where('status', 'completed')->count();
        }
 
    
        return inertia('Dashboard', [
            'user' => new UserCrudResource($authUser),
            'total_projects' => $totalProjectsCount,
            'total_tasks' => $totalTasksCount,
            'progress_projects' => $progressProjects,
            'completed_projects' => $completedProjects,
        ]);
        
    }

    public function getUser()
    {
        $authUser = auth()->user();

        return inertia('layout', [
            'user' => new UserCrudResource($authUser),
        ]);

    }
}
