import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';
import BotonLogin from "./BotonLogin";
import BotonLogin2 from "./BotonLogin2";
import BotonPrueba from "./BotonPrueba"


var a = JSON.parse(localStorage.getItem("user"));

export default class NavBarFinal extends React.Component{


    constructor(props){
        super(props);
        this.state={
            estado : a,
        }

        this.cambio = this.cambio.bind(this);
        
    }

    cambio(){
        localStorage.clear();
        this.setState({estado:null})
        window.location.reload(true);
    }


    render(){

        if(this.state.estado == null){

            return (
    
                <div className = "navigation">
                    <Logo/>
                    <Navbar/>
                    <div>
                    <BotonLogin2/>
                    </div>
                </div>)
    
        }
    
        else{
            return (
    
                <div className = "navigation">
                    <Logo/>
                    <Navbar/>
                    <div>
                    <BotonPrueba cambio={this.cambio}/>
                    <BotonLogin />
                    
                    </div>
                </div>
            );
    

    }

}


}