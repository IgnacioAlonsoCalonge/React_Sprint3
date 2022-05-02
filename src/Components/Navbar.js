import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';

var a = JSON.parse(localStorage.getItem("user"));

export default class Navbar extends React.Component {


    constructor(props){
        super(props);
        this.state={
            creadores : "Creadores",
            resumenes : "Resumenes",
            evaluacion : "Evaluacion",
            contenido : "Subir Contenido",
            admin: false,
        };
    }

    componentDidMount(){
        if (a != null){
            this.setState({admin: a.admin})
        }
    }

    
    


    render(){

        if(this.state.admin == false) {

            return (    
                
                <nav className="nav_links">
                <ul> 
                <li><Link  to= "/creadores">
                    {this.state.creadores}
                    </Link></li>
                <li><Link to= "/resumenes">
                    {this.state.resumenes}
                    </Link></li>               
                </ul> 
                </nav>
                
            )
        }

        else{

            return(
                <nav className="nav_links">
                <ul> 
                <li><Link to= "/evaluaciones">
                    {this.state.evaluacion}
                </Link></li>  
                <li><Link to= "/enviar">
                    {this.state.contenido}
                </Link></li> 
                <li><Link to= "/resumenes">
                    {this.state.resumenes}
                    </Link></li>                              
                </ul> 
                </nav>
            )

        }
        }    
    
}