<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::query()->updateOrCreate(
            ['email' => 'owner@tag-tails.test'],
            [
                'name' => 'Alex Taylor',
                'password' => 'password',
                'intended_plan' => 'basic',
            ]
        );
    }
}
