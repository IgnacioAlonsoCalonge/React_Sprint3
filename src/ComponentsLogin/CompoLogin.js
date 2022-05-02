import React from "react";
import  { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


export default function BotonLogin (props) {

    const navigate = useNavigate();

    
    const [form,setForm] = useState({        
        nombre: null,
        correo: null,
        contraseña: null,       
        iban: null,
        direccion: null,
        dni: null,
        admin: false,
        premium: false,
        
    })

    const handleSubmit = async() =>{
        await axios.post('http://localhost:8080/usuarios/autenticar', form)
        .then(response =>{
            if(form.contraseña === response.data.contraseña){
                a = response;
            localStorage.setItem("user", JSON.stringify(a.data))
            }
            console.log(response.data.contraseña);
        })
        console.log(localStorage.getItem("user"));
        var a = JSON.parse(localStorage.getItem("user"));
        console.log(a.nombre)
        alert("Enviado");

        navigate("/resumenes");
    }

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
        
    }

    console.log(form)

	return (
        <div className="Compologin">
            <div className="recuadro">
            <p>Usuario</p>
            <div className="inputprueba">
            <FaUser className="Hola"/>
            <input
              type="text"
              className="form-control"
              id="formControlInput"
              placeholder="Ingrese su Usuario"
              name='correo'
              onChange={handleChange}
            />
            </div>
            <p>Contraseña</p>
            <div className="inputprueba">
            <RiLockPasswordFill className="Hola"/>
            <input
              type="password"
              className="input2"
              id="formControlInput"
              placeholder="Ingrese su contraseña"
              name='contraseña'
              onChange={handleChange}
            />
            </div>
            <button className="olvidarPass">¿Has olvidado la contraseña?</button>
            <button className="botonlogear" onClick={()=>handleSubmit()} >LogIn</button>
            </div>
        </div>
       );
	
}