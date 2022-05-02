import './Login.css';
import CompoLogin from './ComponentsLogin/CompoLogin';
import NuevoRegistro from './ComponentsLogin/NuevoRegistro';
import {Player} from "@lottiefiles/react-lottie-player";
import data from "./ComponentsLogin/registerlottie.json";

function Login() {
  return (
    <div className="login">
        <CompoLogin/>
        <Player
                className="lottielogin"
                autoplay={true}
                loop={true}
                src= {data}
                />
        <NuevoRegistro/>
    </div>
  );
}

export default Login;