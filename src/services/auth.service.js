import axios from "axios";

const API_URL = "";

class AuthService {
    async login (username, password){
        const response = await axios
            .post(API_URL + "signin", {
                username,
                password
            });
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
    }


    logout(){
        localStorage.removeItem("user");
    }

    
}