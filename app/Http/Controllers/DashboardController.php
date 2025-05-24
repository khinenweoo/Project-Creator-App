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
        $projectCount = Project::count();
        $taskCount = Task::count();


        $progressProjects = Project::where('status', 'in_progress')->count();
        $completedProjects = Project::where('status', 'completed')->count();
    
        return inertia('Dashboard', [
            'user' => new UserCrudResource($authUser),
            'total_projects' => $projectCount,
            'total_tasks' => $taskCount,
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
