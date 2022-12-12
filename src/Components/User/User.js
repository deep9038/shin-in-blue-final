import axios from 'axios'
export default function User(){
    const http = axios.create({
        baseURL:"http://localhost:3000/sign_in_post",
        headers:{
            "content-type":"application/json"
        }
        
    });
    return{
        http
    }
}
