import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Enviar() {

    const [form,setForm] = useState({
        id: null,
        titulo: null,
        autor:'',       //getNombre de la tabla usuario
        likes: 0,
        audio: null,
        imagen: null,
        documento: null,
        publicado: 'true',
        acceso: null,
        descripcion:''
    })

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
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

   const handleFileChangeAudio = (e) => {
    //Read File
    var selectedFile = document.getElementById("formFile1").files;
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
              audio : arrayAuxiliar[1]})
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);
    }                  
}

const handleSubmit = async() =>{
    await axios.post('http://localhost:8080/resumenes/crear', form)
    console.log(form);
    alert("Enviado");
}

const gratuito = () =>{

    setForm({
        ...form,
        acceso: "gratuito"
    })
}

const premium = () =>{

    setForm({
        ...form,
        acceso: "premium"
    })
}   

    

  return (
    <div className='envioderesumenes'>
        <div className='formularios_1'>
            <h1>Rellene el siguiente formulario para 
                subir su resumen.
            </h1>
            <div className='Formulario_01'>
                <p>Título</p>
                <input
                 type="text"
                 className="form-control"
                id="formControlInput"
                placeholder="Titulo"
                name='titulo'
                onChange={handleChange}
                />
                <p>Descripción</p>
                <input
                    type="text"
                    className="form-control"
                    id="formControlInput"
                    placeholder="Descripción"
                    name='descripcion'
                    onChange={handleChange}
                />
                <p>Imagen del resumen</p>
                <div className='imagenflex01'>
                <input></input>
                </div>
                <p>Resumen</p>
                <div className='imagenflex01'>
                <input className="form-control" type="file" id="formFile" 
                name='documento' onChange={handleFileChange} />
                </div>
                <p>Archivo de audio</p>
                <div className='imagenflex01'>
                <input className="form-control" type="file" id="formFile1" 
                name='audio' onChange={handleFileChangeAudio} />
                </div>
                <p>Permisos</p>
                <div className='imagenflex01'>
                    <p onClick={() => gratuito()} id = "gratuito01">Gratuito</p>
                    <p onClick={() => premium()} id = "premium_001">Premium</p>
                </div>
                <button id = "boton_01" onClick={()=>handleSubmit()}>Subir</button>
            </div>
        </div>
    </div>
  )
}

