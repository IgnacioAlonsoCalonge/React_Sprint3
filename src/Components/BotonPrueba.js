import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default function BotonLogin (props) {



	return (

        <button onClick={props.cambio} className="boton_login">Logout</button>

       );
	
}