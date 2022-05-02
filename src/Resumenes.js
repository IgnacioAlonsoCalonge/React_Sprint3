
import Card from './ComponentsResumen/Card';
import './Resumenes.css';
import foto from "./Img/websiteimg.jpg"
import foto2 from "./Img/oficina.jpg"
import foto3 from "./Img/imagenhola.png"
import foto4 from "./Img/empresas.jpg"
import foto5 from "./Img/felicidad.jpg"
import foto6 from "./Img/amigos.jpg"
import foto7 from "./Img/viajar.jpg"
import foto8 from "./Img/plandenegocio.jpg"
import Primerabarra from './ComponentsResumen/Primerabarra';
import React from 'react';
import axios from 'axios';

let fotos = [];

export default class Resumenes extends React.Component {

 

  constructor(props){
    super(props);

		this.state = {
			datos: [[]]
		};

    fotos = [foto,foto2,foto3,foto4,foto5,foto6,foto7,foto8];
    this.downloadpdf = this.downloadpdf.bind(this);
    this.downloadaudio = this.downloadaudio.bind(this);
   
  }

  async componentDidMount() {

		let response = await fetch("http://localhost:8080/resumenes");

		let resumenes = await response.json();

    this.setState({datos: resumenes});

    console.log(resumenes[0])
    
    console.log(resumenes[0].titulo)

    console.log(this.state.datos[0].titulo)
    
	}

  render(){
 
    return (
    <div className="resum">
      <Primerabarra/>
      <div className='catalogobutt'>
      <button id="catalogo01">Todo</button>
      <button id="catalogo02">Gratuito</button>
      <button id="catalogo03">Premium</button>
      <input id = "input_01" placeholder='Buscar'></input>
      </div>
      <div className='resumenesflex'>
      {this.state.datos.map((resumen,index)=>{
        if(resumen.publicado == true){
          return <Card key={resumen.id}
          leer ={()=> this.downloadpdf(resumen.id)}
          escuchar = {()=> this.downloadaudio(resumen.id)}
          foto1={fotos[index]}
          title={resumen.titulo}
          descripcion={resumen.descripcion}/>
        }

      })}
      </div>

    </div> 
    ); 
    
  }

  downloadpdf(identificador) {
     axios({
       url: 'http://localhost:8080/resumenes/'+identificador+'/pdf',
       method: 'GET',
       responseType: 'blob'
     }).then((response) => {
       console.log(response);
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', 'resumen.pdf')
       document.body.appendChild(link)
       link.click()
     })
    
  }

  downloadaudio(identificador) {
    axios({
      url: "http://localhost:8080/resumenes/"+identificador+"/mp3",
      method: 'GET',
      responseType: 'blob'
    }).then((response) => {
      console.log(response);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resumen.mp3')
      document.body.appendChild(link)
      link.click()
    })
  }

}


