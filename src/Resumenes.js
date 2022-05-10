
import Card from './ComponentsResumen/Card';
import './Resumenes.css';
import Primerabarra from './ComponentsResumen/Primerabarra';
import React from 'react';
import axios from 'axios';
const a = JSON.parse(localStorage.getItem("user"));

export default class Resumenes extends React.Component {

 

  constructor(props){
    super(props);

		this.state = {
			datos: [[]]
		};

    this.downloadpdf = this.downloadpdf.bind(this);
    this.downloadaudio = this.downloadaudio.bind(this);
   
  }

  async componentDidMount() {

		let response = await fetch("http://localhost:8080/resumenes");

		let resumenes = await response.json();

    this.setState({datos: resumenes});
    
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
      {
      this.state.datos.map((resumen)=>{

         if(resumen.publicado === true && a===null && resumen.acceso === 'gratuito'){
          return <Card key={resumen.id}
          leer ={()=> this.downloadpdf(resumen)}
          escuchar = {()=> this.downloadaudio(resumen)}
          foto1={"data:image/png;base64,"+ resumen.imagen}
          title={resumen.titulo}
          descripcion={resumen.descripcion}/>
        }

        else if(a !==null){
           if(resumen.publicado === true && a.premium === false && resumen.acceso==='gratuito'){
            return <Card key={resumen.id}
            leer ={()=> this.downloadpdf(resumen)}
            escuchar = {()=> this.downloadaudio(resumen)}
            foto1={"data:image/png;base64,"+ resumen.imagen}
            title={resumen.titulo}
            descripcion={resumen.descripcion}/>
          }

          else if(resumen.publicado === true && a.premium === true ){         
              return <Card key={resumen.id}
              leer ={()=> this.downloadpdf(resumen)}
              escuchar = {()=> this.downloadaudio(resumen)}
              foto1={"data:image/png;base64,"+ resumen.imagen}
              title={resumen.titulo}
              descripcion={resumen.descripcion}/>
          }
        }
      })}
      </div>

    </div> 
    ); 
    
  }

  downloadpdf(resumen) {
     axios({
       url: 'http://localhost:8080/resumenes/'+resumen.id+'/pdf',
       method: 'GET',
       responseType: 'blob'
     }).then((response) => {
       console.log(response);
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', resumen.titulo+'.pdf')
       document.body.appendChild(link)
       link.click()
     })
    
  }

  downloadaudio(resumen) {
    axios({
      url: "http://localhost:8080/resumenes/"+resumen.id+"/mp3",
      method: 'GET',
      responseType: 'blob'
    }).then((response) => {
      console.log(response);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', resumen.titulo+'.mp3')
      document.body.appendChild(link)
      link.click()
    })
  }

}


