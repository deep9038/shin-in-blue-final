import React from "react";
import "./Ragister.css";
import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import Axios from 'axios'
// import Massage from "./Massage";
// import { useNavigate } from "react-router-dom";
const Register = (props) => {
// const [result,setResult]=useState("")
  
  const [data,setData]=useState({
    Name:"",
    Email:"",
    Phonnumber:"",
    Fname:"",
    Lname:"",
    // profileImg:'',
    // coverImg:"",
    Password:"",
    Re_password:""
  })
  // const naviget=useNavigate()
  const url="http://192.168.29.146:3000/api/sign_up_post";
const Handel=(e)=>{
    const newdata={...data}
    newdata[e.target.name] = e.target.value
    setData(newdata)
}
const Submit=(e)=>{
  e.preventDefault();
  Axios.post(url,{
    Name:data.Name,
    Email:data.Email,
    Phonnumber:data.Phonnumber,
    Fname:data.Fname,
    Lname:data.Lname,
    // profileImg:data.profileImg,
    Password:data.Password,
    Re_password:data.Re_password,
  })
  .then(res=>{
    // if(res.data.statusv==='success'){
    //   naviget("/")
    // }else{
    //   setResult(res.data.message)
    // }
    // console.log(res)
    alert(res.data.message)

      console.log("this is error",res)
    
    // setResult(res.data)
    
  }).catch(function (error) {

    alert(error.response.data.message);
  });
  
 
}
  return (
    <form className="reg-box container"  onSubmit={(e)=>Submit(e)} action="/sign_up_post" method="post">
      <input name="Name"  type="text" placeholder="Name" onChange={(e)=>Handel(e)} />
      <input name="Email"  type="email" placeholder="Email" onChange={(e)=>Handel(e)} />
      <input name="Phonnumber"  type="text" placeholder="Phone Number" onChange={(e)=>Handel(e)} />
      <input name="Fname"  type="text" placeholder="First Name" onChange={(e)=>Handel(e)} />
      <input name="Lname"  type="text" placeholder="Last Name" onChange={(e)=>Handel(e)} />
      {/* <input type="hidden" name="profileImg" defaultValue="https://cdn.landesa.org/wp-content/uploads/default-user-image.png" onChange={(e)=>Handel(e)} />
      <input type="hidden" name="coverImg" defaultValue=""  onChange={(e)=>Handel(e)}  /> */}
      <input name="Password"  type="password" autoComplete="off" placeholder="Password"  onChange={(e)=>Handel(e)}/>
      <input name="Re_password"  type="text" placeholder="Re-enter password"  onChange={(e)=>Handel(e)}/>
      <input type="submit" className="btn btn-primary" id="bt" value="Rasgister" />
      
      <div
        className="regbtn"
        onClick={() => {
          props.op(true);
        }}
      >
        <MdArrowBackIosNew />
      </div>
      
    </form>
  );
};

export default Register;
