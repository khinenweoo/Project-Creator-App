<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    protected $projects = [
        'Design Database Schema',
        'Build Wireframes',
        'App Development',
        'Break Down Features',
        'Unit Test Plans',
        'Develop Responsive UI Components',
        'Optimize Performance',
        'User Feedback for Improvements',
        'Deploy to Production',
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
            'image_path' => fake()->randomElement(['/project/proj1.jpg', '/project/proj2.jpg', '/project/proj3.jpg']),
            'created_by' => fake()->randomElement([1,2]),
            'updated_by' => fake()->randomElement([1,2]),
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
}
