import './App.css';
import './MiPerfil.css';
import './Evaluaciones.css';
import NavBarFinal from './Components/NavBarFinal';
import { Routes, Route } from 'react-router-dom';
import Resumenes from "./Resumenes";
import Creadores from './Creadores';
import MiPerfil from './MiPerfil';
import Premium from './ComponentsPremium/Premium';
import './ComponentsPremium/Premium.css'
import Evaluaciones from './ComponentsEval/Evaluacion';
import Enviar from './ComponentsEval/Enviar';
import Login from './Login';
import Register from './Components/Register';
import SinPermiso from './SinPermiso';

function App() {
  const a = JSON.parse(localStorage.getItem("user"));

  
  console.log(a);
  if(a!= null){
    console.log(a.admin);
  }
    if(a != null && a.admin == false){
    return (
      <div className="App">
        <NavBarFinal/>
        <Routes>
          <Route path='/' element={<Resumenes/>}/>
          <Route path='/resumenes' element={<Resumenes/>}/>
          <Route path='/miPerfil' element={<MiPerfil/>}/>
          <Route path='/creadores' element={<Creadores/>}/>
          <Route path='/premium' element={<Premium/>}/>
          <Route path="/registrar" element={<Register/>}/>
          <Route path="/evaluaciones" element={<SinPermiso/>}/>
          <Route path="/enviar" element={<SinPermiso/>}/>
        </Routes>

      </div>
    );


  }
  else if(a == null){

    return(
    <div className="App">
    <NavBarFinal/>
    <Routes>
      <Route path='/' element={<Resumenes/>}/>
      <Route path='/resumenes' element={<Resumenes/>}/>
      <Route path='/creadores' element={<Creadores/>}/>
      <Route path='/premium' element={<Premium/>}/>
      <Route path="/registrar" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/evaluaciones" element={<SinPermiso/>}/>
      <Route path="/enviar" element={<SinPermiso/>}/>
    </Routes>

  </div>
  );

  }

  else if (a != null && a.admin == true){
    return(
      <div className="App">
      <NavBarFinal/>
      <Routes>
      <Route path='/' element={<Resumenes/>}/>
      <Route path='/resumenes' element={<Resumenes/>}/>
      <Route path='/evaluaciones' element={<Evaluaciones/>}/>
      <Route path='/enviar' element={<Enviar/>}/>
      </Routes>
  
    </div>


      
    );

  }
}



export default App;
