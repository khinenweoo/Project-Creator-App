<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    protected $tasks = [
        'Implement Authentication Module',
        'API Testing',
        'Report & Log Bugs',
        'Build Backend features',
        'Update Documentation',
        'Integrate Third-Party Services',
        'Define Product Goals',
        'Design Database Schema',
        'Create Project Repo & Branch strategy',
        'Deploy to Staging environment',
    ];
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $usedNames = [];
        $taskNameIndex = array_rand($this->tasks);
        $taskName = $this->tasks[$taskNameIndex];
        // Ensure the task name is unique by appending a unique identifier
        while (in_array($taskName, $usedNames)) {
            $taskName = $this->tasks[$taskNameIndex] . ' ' . uniqid();
        }
        $usedNames[] = $taskName;

        return [
            'name' => $taskName,
            'description' => fake()->realText(),
            'due_date' => fake()->dateTimeBetween('now', '+1year'),
            'status' => fake()->randomElement(['pending', 'in_progress', 'completed']),
            'priority' => fake()->randomElement(['low', 'medium', 'high']),
            'image_path' => fake()->imageUrl(),
            'assigned_user_id' => fake()->randomElement([1, 2, 3, 4]),
            'created_by' => 1,
            'updated_by' => 1,
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
}
