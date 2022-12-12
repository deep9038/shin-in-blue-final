import React, { useState } from "react";
import "./Modal.css";
import Accountgf from "./Accountgf";
import { Si1Password } from "react-icons/si";
import Chusecat from "./Chusecat";
import Register from "./Register"
import VanderReister from "./VanderReister";
import { Link } from "react-router-dom";
// import Axios from 'axios'
import { login } from "../../../api/api";

// import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal }) => {
  const [what,setWhat]=useState()
  const [openreg,setOpenreg] = useState(false);
  // const [logindata,setLogInData]=useState([])
  // const naviget=useNavigate()
  const [data,setData]=useState({
    Email:"",
    Password:"",
  })
  const url="http://192.168.29.146:3000/api/sign_in_post"
  const Handel=(e)=>{
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata)
      
  }
  
  
  const submit=(e)=>{
    e.preventDefault();
    login(data)
    

    // Axios.post(url,{
    //   Email:data.Email,
    //   Password:data.Password
    // })
    // .then(res=>{
      
    //   console.log(res)
    // })
  }
  // const handlInput = (e) => {
  //     name=e.target.name
  //     value=e.target.value
  //     setUser({...user,[name]:value })
  // };
  // const submitForm = () => {
    
  //   let data={Email,Password}
  //   console.log(data)
  //   fetch("http://192.168.29.146:3000/api/sign_in_post",{
  //     method:'POST',
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify(data)
  //   }).then((result)=>{
  //     console.log(result)
  //   })
  // };
  return (
    <div className="modal-background model container-fluid">
      <img src={"https://i.gifer.com/D6np.gif"} className="logIn-img-bk" alt="" />
      <div className="modal-container">
        

        <div className="logpan ">
          <h1 className="d-flex justify-content-center pb-3  welcome">
            {openreg ? "RAGISTER" : "WELCOME"}
          </h1>
          <button onClick={() => closeModal(false)}>X</button>
          {openreg?"":what==="vender"?<VanderReister op={setOpenreg}/>:<Accountgf/>}
          {openreg&&<Chusecat op={setOpenreg} bal={openreg} cal={what} what={setWhat}/>}
          {openreg===false && what==="buyer"?<Register op={setOpenreg}/>:""}
          <div className={openreg || what ? "d-none":""}>
            <form
              className="input-plot my-4"
              action="/sign_in_post"   
              method="post"
              onSubmit={(e)=>submit(e)}
            >
              <input
                type="email"
                name="Email"
                className="text p-2"
                placeholder="Email"
                id="Email"
                onChange={(e)=>Handel(e)}
              />
              <input
                type="password"
                name="Password"
                
                id="Password"
                className="password p-2"
                placeholder="Password"
                onChange={(e)=>Handel(e)}
              />
              <Link to="/ForgotPassword" className="fp btn">
                <Si1Password size={21} /> <h4>Forgot password</h4>
              </Link>
              <div className="btn-pnl">
              <div
                className="btn btn-primary"
                onClick={() => {
                  setOpenreg(true);
                }}
              >
                SIGN UP
              </div>
             <input type="submit" className="btn btn-primary" value="Log In" />
            </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
