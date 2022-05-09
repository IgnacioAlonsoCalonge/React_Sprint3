import "../Formulario.css";
import Iban from "./Iban";
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export default function Formulario () {
  
  var a = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  var b;

  if(a==null){
    b=null
  }

  else{
    b=a.nombre;
  }

    const [form,setForm] = useState({
        id: null,
        titulo: null,
        autor: b,       //getNombre de la tabla usuario
        likes: 0,
        audio: null,
        imagen: null,
        documento: null,
        publicado: 'false',
        acceso: 'Demo',
        descripcion:''
    })
    

   /* useEffect(()=>{
      const getPedido = async()=>{
        const datos = await axios.get('http://localhost:8080/resumenes')
        setDatosProduct(datos.data)
      }
      getPedido()
    })*/


    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
        console.log(form)
    }

    const handleFileChange = (e) => {
         //Read File
         var selectedFile = document.getElementById("formFile").files;
         //Check File is not Empty
         if (selectedFile.length > 0) {
             // Select the very first file from list
             var fileToLoad = selectedFile[0];
             // FileReader function for read the file.
             var fileReader = new FileReader();
             var base64;
             // Onload of file read the file content
             fileReader.onload = function() {
                
                 // Print data in console
                 var arrayAuxiliar=[];
                 base64 = fileReader.result;
                 
                 arrayAuxiliar=base64.split(',');
                 console.log(arrayAuxiliar[1]);
                 
                 setForm({
                   ...form,
                   documento : arrayAuxiliar[1]})
             };
             // Convert data to base64
             fileReader.readAsDataURL(fileToLoad);
            }
    }

    const handleImgChange = (e) => {
      //Read File
      var selectedFile = document.getElementById("formImg").files;
      //Check File is not Empty
      if (selectedFile.length > 0) {
          // Select the very first file from list
          var fileToLoad = selectedFile[0];
          // FileReader function for read the file.
          var fileReader = new FileReader();
          var base64;
          // Onload of file read the file content
          fileReader.onload = function() {
             
              // Print data in console
              var arrayAuxiliar=[];
              base64 = fileReader.result;
              
              arrayAuxiliar=base64.split(',');
              console.log(arrayAuxiliar[1]);
              
              setForm({
                ...form,
                imagen : arrayAuxiliar[1]})
          };
          // Convert data to base64
          fileReader.readAsDataURL(fileToLoad);
      }                  
 }
    
    const handleSubmit = async() =>{
        if(JSON.parse(localStorage.getItem("user")) != null){
        await axios.post('http://localhost:8080/resumenes/crear', form)
        console.log(form);
        alert("Enviado");
        console.log(a.name)
        window.location.reload(true);
      }

      else{
        navigate("/login")
      }
    }
   

  return (
    <div className="formulario">
       
        <p>Foto de la portada</p>
        <input className="form-control" type="file" id="formImg" 
                name='imagen' onChange={handleImgChange} />
            <p>Resumen a evaluar</p>
            <div className="resumenformulario">
            <input className="form-control" type="file" id="formFile" name='documento' onChange={handleFileChange} />
            </div>
            <p>Titulo del resumen</p>
            <input
              type="text"
              className="form-control"
              id="formControlInput"
              placeholder="Titulo"
              name='titulo'
              onChange={handleChange}
            />
            <p>Descripción del resumen</p>
            <input
              type="text"
              className="form-control"
              id="formControlInput"
              placeholder="Descripción"
              name='descripcion'
              onChange={handleChange}
            />
            <button className="Enviar" onClick={()=>handleSubmit()}>Enviar</button>
        
    </div>
  )
}