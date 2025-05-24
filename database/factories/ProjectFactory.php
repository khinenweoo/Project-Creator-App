<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    protected $projects = [
        'Weekly Meal Prep Routine',
        'Content Creation',
        'App Development',
        'Networking Challenge',
        'Monthly Progress Reviews',
        'Learn to Cook 5 New Dishes',
        'Gratitude Practice Project',
        'Task Management System Setup',
        'Side Hustle Starter Kit',
        'Monthly Budget Reset',
        'Daily Planning Habit',
        'Vision Board Creation'
    ];
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $projectName = array_splice($this->projects, array_rand($this->projects), 1)[0];
        return [
            'name' => $projectName,
            'description' => fake()->realText(),
            'due_date' => fake()->dateTimeBetween('now', '+1year'),
            'status' => fake()->randomElement(['pending', 'in_progress', 'completed']),
            'image_path' => fake()->imageUrl(),
            'created_by' => fake()->randomElement([1,2]),
            'updated_by' => fake()->randomElement([1,2]),
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
}
