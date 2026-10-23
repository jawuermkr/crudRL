import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = 'http://localhost:8000/api';

const MostrarUsuarios = () => {
  
  const[usuarios, setUsuarios] = useState([]);
  useEffect ( ()=>{
    getAllUsuarios()
  }, [])

  const getAllUsuarios = async () => {
    const response = await axios.get(`${url}/usuarios`)
    setUsuarios(response.data)
  }

  const deleteUsuario = async (id) => {
    await axios.delete(`${url}/usuario/${id}`)
    getAllUsuarios()
  }

  return (
    <div className="card p-3">
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Dirección</th>
              <th scope="col">Edad</th>
              <th scope="col">Cargo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map( (usuario) =>(
              <tr key={usuario.id}>
                <td>{usuario.nombre}</td>
                <td>{usuario.direccion}</td>
                <td>{usuario.edad}</td>
                <td>{usuario.cargo}</td>
                <td>
                  <Link to={`/editar/${usuario.id}`} className='btn btn-warning'>Editar</Link>
                  <button onClick={ ()=>deleteUsuario(usuario.id)} className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MostrarUsuarios;