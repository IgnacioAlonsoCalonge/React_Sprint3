import React from 'react'
import { HiCheckCircle } from "react-icons/hi";
import { IoIosRemoveCircle} from "react-icons/io";


const Card2 = (props) => {
  return (
    <div className='cards'>
        <div className='cards2'>
        <img src={props.foto1}/>
        </div>
        <h4>{props.title}</h4>
        <p>{props.descripcion}</p>
        <div className='botonescolocados'>
          <button onClick={props.leer} id="boton_resumen">Resumen</button>
          <HiCheckCircle onClick={props.aceptar} id ="check"/>
          <IoIosRemoveCircle id ="remoove"/>
        </div>
    </div>
  )
}

export default Card2