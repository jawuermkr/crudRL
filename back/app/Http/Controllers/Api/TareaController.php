<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tarea;
use Illuminate\Http\Request;

class TareaController extends Controller
{
    public function index()
    {
        $tarea = Tarea::all();
        return $tarea;
    }

    public function store(Request $request)
    {
        $tarea = new Tarea();
        $tarea->nombre = $request->nombre;
        $tarea->tarea = $request->tarea;
        $tarea->detalles = $request->detalles;

        $tarea->save();
    }

    public function show(string $id)
    {
        $tarea = Tarea::find($id);
        return $tarea;
    }
    public function update(Request $request, string $id)
    {
        $tarea = Tarea::findOrFail($request->$id);
        $tarea->nombre = $request->nombre;
        $tarea->tarea = $request->tarea;
        $tarea->detalles = $request->detalles;

        $tarea->save();
        return $tarea;
    }

    public function destroy(string $id)
    {
        $tarea = Tarea::destroy($id);
        return $tarea;
    }
}
