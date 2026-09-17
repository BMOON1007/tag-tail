<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class PlanController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'plans' => array_values(config('tagtails.plans')),
            'tags' => config('tagtails.tags'),
        ]);
    }
}
