<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'id' => 1,
                'user_id'=> 'M00001',
                'name' => 'Henry John',
                'username' => 'John',
                'email' => 'admin@example.com',
                'password' => bcrypt('admin!1234'),
                'email_verified_at' => '2025-05-29 17:45:00',
                'phone_number' => '0853164567',
                'profile_image' => '/user/avatar1.jpg',
                'occupation' => 'Portal Admin',
                'is_admin' => 1,
            ],
            [
                'id' => 2,
                'user_id'=> 'M00002',
                'name' => 'Rachel Lauren',
                'username' => 'Rachel',
                'email' => 'adminrachel@example.com',
                'password' => bcrypt('admin!1234'),
                'email_verified_at' => '2023-05-25 17:45:00',
                'phone_number' => '082890213',
                'profile_image' => '/user/avatar2.jpg',
                'occupation' => 'Portal Admin',
                'is_admin' => 1,
            ],
            [
                'id' => 3,
                'user_id'=> 'M00003',
                'name' => 'Steven Butler',
                'username' => 'Steven',
                'email' => 'stevenmember@example.com',
                'password' => bcrypt('member!1234'),
                'email_verified_at' => '2025-05-13 17:45:00',
                'phone_number' => '081479435',
                'profile_image' => '/user/avatar3.jpg',
                'occupation' => 'Mobile Developer',
                'is_admin' => 0,
            ],
            [
                'id' => 4,
                'user_id'=> 'M00004',
                'name' => 'Lily Chen',
                'username' => 'Chen',
                'email' => 'member@gmail.com',
                'password' => bcrypt('member!1234'),
                'email_verified_at' => '2023-05-17 17:45:00',
                'phone_number' => '082744941',
                'profile_image' => '/user/avatar4.jpg',
                'occupation' => 'Project Coordinator',
                'is_admin' => 0,
            ],
        ];

        
        foreach ($users as $value) {
            User::create(
                [
                    'id' => $value['id'],
                    'user_id'=> $value['user_id'],
                    'name' => $value['name'],
                    'username' => $value['username'],
                    'email' =>  $value['email'],
                    'password' =>  $value['password'],
                    'email_verified_at' => $value['email_verified_at'],
                    'phone_number' => $value['phone_number'],
                    'profile_image' => $value['profile_image'],
                    'occupation' => $value['occupation'],
                    'is_admin' => $value['is_admin'],
                ]
            );
        }
    }
}
