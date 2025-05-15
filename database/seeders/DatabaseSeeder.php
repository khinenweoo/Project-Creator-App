<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Project;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'id' => 1,
            'user_id'=> 'M00001',
            'name' => 'Khine Nwe',
            'username' => 'Khine',
            'email' => 'khine@example.com',
            'password' => bcrypt('123.devUserA'),
            'email_verified_at' => time()
        ]);

        User::factory()->create([
            'id' => 2,
            'user_id'=> 'M00002',
            'name' => 'Steven Powell',
            'username' => 'Steven',
            'email' => 'steven@example.com',
            'password' => bcrypt('123.devUserB'),
            'email_verified_at' => time()
        ]);

        Project::factory()
            ->count(30)
            ->hasTasks(30)
            ->create();
    }
}
