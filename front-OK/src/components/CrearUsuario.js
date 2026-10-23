import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = 'http://localhost:8000/api/usuario';

const CrearUsuario = () => {

  const[nombre, setNombre] = useState('');
  const[direccion, setDireccion] = useState('');
  const[edad, setEdad] = useState('');
  const[cargo, setCargo] = useState('');
  const navigate =  useNavigate();

const store = async (e) => {
    e.preventDefault()
    await axios.post(url, {nombre: nombre, direccion: direccion, edad: edad, cargo: cargo})
    window.location.reload();
  }

  return (
    <div className="card p-3">
    <div className="container mt-3">
      <form className="form" onSubmit={store}>
        <label>Nombre</label>
        <input
          className="form-control"
          type="text"
          value={nombre}
          onChange={ (e)=> setNombre(e.target.value)}
          />
        <label>Dirección</label>
        <input
          className="form-control"
          type="text"
          value={direccion}
          onChange={ (e)=> setDireccion(e.target.value)}
          />
        <label>Edad</label>
        <input
          className="form-control"
          type="text"
          value={edad}
          onChange={ (e)=> setEdad(e.target.value)}
          />
        <label>Cargo</label>
        <input
          className="form-control"
          type="text"
          value={cargo}
          onChange={ (e)=> setCargo(e.target.value)}
          />
        <button type="submit" className="btn btn-success form-control">Enviar</button>
      </form>
    </div>
    </div>
  )
}

export default CrearUsuario;