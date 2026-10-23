<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;



class UsuarioController extends Controller
{
    public function index()
    {
        $usuario = Usuario::all();
        return $usuario;
    }

    public function store(Request $request)
    {
        $usuario = new Usuario();
        $usuario->nombre = $request->nombre;
        $usuario->direccion = $request->direccion;
        $usuario->edad = $request->edad;
        $usuario->cargo = $request->cargo;

        $usuario->save();
    }

    public function show(string $id)
    {
        $usuario = Usuario::find($id);
        return $usuario;
    }
    public function update(Request $request, string $id)
    {
        $usuario = Usuario::findOrFail($request->id);
        $usuario->nombre = $request->nombre;
        $usuario->direccion = $request->direccion;
        $usuario->edad = $request->edad;
        $usuario->cargo = $request->cargo;

        $usuario->save();
    }

    public function destroy(string $id)
    {
        $usuario = Usuario::destroy($id);
        return $usuario;
    }
}
