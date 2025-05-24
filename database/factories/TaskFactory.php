<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    protected $tasks = [
        'Read 1 book/month',
        'Track progress every Sunday',
        'Sleep 7–8 hours/night',
        'Build Backend features',
        'Design a Personal Knowledge Base',
        'Prototype Design',
        'Create Basic Graphic Design',
        'Weekly digital detox',
        'Limit processed sugar to <25g/day',
        'Stretch daily',
        'Eat 3 servings of veggies & 2 fruits/day',
        'Organize Digital Files',
    ];
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $taskName = array_splice($this->tasks, array_rand($this->tasks), 1)[0];

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
