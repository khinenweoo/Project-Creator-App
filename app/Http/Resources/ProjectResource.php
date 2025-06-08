<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class ProjectResource extends JsonResource
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
            'name' => $this->name,
            'description' => $this->description,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'due_date' => (new Carbon($this->due_date))->format('d M'),
            'due_date1' => (new Carbon($this->due_date))->format('Y-m-d'),
            'duration' => $this->duration,
            'status' => $this->status,
            'image_path' => $this->image_path ? Storage::url($this->image_path) : '',
            'tasks' => $this->tasks_count? $this->tasks_count : 0,
            'assigned_users' => $this->assign_users? $this->assign_users : 0,
            'createdBy' => new UserResource($this->createdBy),
            'updatedBy' => new UserResource($this->updatedBy),
        ];
    }
}
