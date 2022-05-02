import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Register(){


    const [form,setForm] = useState({
        nombre: null,
        correo: null,
        contraseña: null,       //getNombre de la tabla usuario
        iban: null,
        direccion: null,
        dni: null,
        admin: false,
        premium: false,
    })

    const handleSubmit = async() =>{
        await axios.post('http://localhost:8080/usuarios/crear', form)
        console.log(form);
        alert("Enviado");
    }

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    console.log(form)

  return (
    <div className='login1'>
        <div className='Compologin1'>
            <div className='recuadro1'>
            <p>Nombre de Usuario</p>
            <input
              type="text"
              className="form-control"
              id="formControlInput"
              placeholder="Nombre"
              name='nombre'
              onChange={handleChange}
            />
            <p>Dirección de correo</p>
            <input
              type="text"
              className="form-control"
              id="formControlInput"
              placeholder="Correo"
              name='correo'
              onChange={handleChange}
            />
            <p>Contraseña</p>
            <input
              type="password"
              className="form-control"
              id="formControlInput"
              placeholder="Contraseña"
              name='contraseña'
              onChange={handleChange}
            />
            <p>Repita la contraseña</p>
            <input
              type="password"
              className="form-control"
              id="formControlInput"
              placeholder="contraseña"
             
            />
            <div className='condiciones_servicio'>
            <p id = "condicionesserv">Lea las condiciones de servicio</p>
            </div>
            <div className='botonregister'> 
            <button  onClick={()=>handleSubmit()}>Registrarme</button>
            </div>
            </div>
        </div>
        <div className='descripcion_registro'>
            <h1>¡Estás a un solo paso de crear tu cuenta!</h1>
            <p>Rellena el siguiente formulario con tus datos y le 
                enviaremos un correo para confirmar el registro de su cuenta.
            </p>
            <p>
                Una vez que pertenezcas a la familia podrás consultar los
                resúmenes con los que podrás interactuar añadiéndolos a la
                lista de "favoritos", "ver después" o incluso... ¡comentarlos!
            </p>
        </div>
    </div>
  )
}