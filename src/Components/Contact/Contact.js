import React from "react";
import Modal from "../Home/HomeComponant/Modal";
// import Navbar from "../Home/HomeComponant/Navbar";
import ContectGif from "../sib2 frametmt/contact-us1.gif"
import { useState } from "react";
import "./Contact.css";
import cotect from '../sib2 frametmt/contact 3.png'
import Contribute from "../Contribute";
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
import Axios from 'axios'
import Navbar from "../NewNav/Navbar";
const Contact = () => {
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut,setContribut]=useState(false)
  const [data,setData]=useState({
    Full_name:"",
    Email:"",
    subject:"",
    massage:""
  })
  const Handel=(e)=>{
    const newdata={...data}
    newdata[e.target.name] = e.target.value
    setData(newdata)
}
const url ="http://192.168.29.146:3000/api/Contact_Form_Post"
const Submit=(e)=>{
  e.preventDefault();
  Axios.post(url,{
    Full_name:data.Full_name,
    Email:data.Email,
    subject:data.subject,
    massage:data.massage
  }).then(res=>{
    console.log(res)
  })
}

  return (
    <div>
      <div><Bacimg img="https://images.unsplash.com/photo-1656904889109-e59d094ab030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/></div>
      <Navbar op={setOpenmod}  conset={setContribut} />
      <>
      <div className="container">
        <div className="contectgif"> <img src={ContectGif} className="gif"  alt="" /> <img  className="d-flex justify-content-center abusimg" src={cotect} alt="" /></div>
      
      </div>
      <div className="contact-page">
      
        <div className="container-fluid cp-massage">
          <h1> Have something in mind?Let's talk.</h1>
          <p>share your ideas and questions </p>
          {/* <h2 className=" mx-4">
            Have something in mind?Let's talk.
          </h2>
          <p className="m-2 mb-3" style={{ fontSize:"20px" }} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, animi!
          </p> */}
          <form className="form my-3 mx-auto" onSubmit={(e)=>Submit(e)} action="/Contect_form_Post"  method="post">
           
              <b style={{ color: "black", fontfamily: 'Rubik',fontSize:"30px" }} className="" >Send a Massage</b>
           
            <input type="text" value={data.Full_name} onChange={(e)=>Handel(e)} name="Full_name" placeholder="FULL NAME"/>
            <input type="email" value={data.Email}  onChange={(e)=>Handel(e)} name="Email" placeholder="EMAIL" />
            <input type="text" value={data.subject}  onChange={(e)=>Handel(e)} name="subject" placeholder="SUBJECT" />
            <textarea
              name="massage"
              value={data.massage}
              onChange={(e)=>Handel(e)}
              cols="10"
              rows="5"
              placeholder="TYPE YOUR MASSAGE"
            ></textarea>
            <button type="submit" className="up-btn contect-but">
              {" "}
              submit
            </button>
          </form>
        </div>
        <div className="careers">
          <h3>careers</h3>
          <p >Have a project in mind and just say hi? Send a message:</p>
          <b >info@shineinblue.com</b>
        </div>
        <div className="about">
            <h3 >About us</h3>
            <p >Would you like to join our growing team? Please contact us at:</p>
            <b >info@shineinblue.com</b>
            {/* <div className="dnk">
            <h5 >FIND ACTIVE POSITIONS</h5>
            
        </div> */}
        </div>
        
      </div>
      </>
      <Footer/>
      {opencontribut ? <Contribute closeconMod={setContribut} />:""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default Contact;
