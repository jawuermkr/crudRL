import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const url = 'http://localhost:8000/api/usuario/'

const EditarUsuario = () => {
    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [edad, setEdad] = useState('')
    const [cargo, setCargo] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${url}${id}`, {
            nombre: nombre,
            direccion: direccion,
            edad: edad,
            cargo: cargo
        })
        navigate('/')
    }
    
    useEffect( () =>{
        const getUsuarioById = async () => {
            const response = await axios.get(`${url}${id}`)
            setNombre(response.data.nombre)
            setDireccion(response.data.direccion)
            setEdad(response.data.edad)
            setCargo(response.data.cargo)
        }
        getUsuarioById()
    }, [] )

    return (
        <div>
        <h3>Editar Usuario</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Dirección</label>
                <input 
                    value={direccion}
                    onChange={ (e)=> setDireccion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Edad</label>
                <input 
                    value={edad}
                    onChange={ (e)=> setEdad(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Cargo</label>
                <input 
                    value={cargo}
                    onChange={ (e)=> setCargo(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Actualizar</button>
        </form>
    </div>
    )
}

export default EditarUsuario;
