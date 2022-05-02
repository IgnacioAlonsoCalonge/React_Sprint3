import React from "react";
import  { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function BotonLogin (props) {


	return (
        <div className="descripcionLogin">
            
            <h1>¿Aún no tienes cuenta?</h1>
            <p>Si aún no te has registrado haz click en 
                el siguiente botón
            </p>
            <Link to = "/registrar"><button>
                Regístrate
            </button></Link>

        </div>
       );
	
}