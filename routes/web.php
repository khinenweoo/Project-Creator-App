<?php

use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware(['auth', 'verified'])->group(function() {

    Route::get('/dashboard', [DashboardController::class, 'dashboard'])
     ->name('dashboard');
    Route::get('/activeuser', [DashboardController::class, 'getUser']);

     Route::resource('projects', ProjectController::class)->only(['index', 'create', 'store']);
     Route::get('/projects/{project}', [ProjectController::class, 'show'])->name('project.show');
     Route::get('/projects/{project}/edit', [ProjectController::class, 'edit'])->name('project.edit');
     Route::put('/projects/{project}', [ProjectController::class, 'update'])->name('project.update');
     Route::delete('/projects/{project}', [ProjectController::class, 'destroy'])->name('project.destroy');
     
     Route::resource('task', TaskController::class);
     Route::put('/task/{taskId}/complete', [TaskController::class, 'updateStatus'])->name('task.complete');
     Route::resource('user', UserController::class);
     Route::resource('member', MemberController::class);

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});




require __DIR__.'/auth.php';
