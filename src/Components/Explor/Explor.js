import React from "react";
// import Surchbar from "../Surchbar";
import Excard from "./Excard";
import { useState } from "react";
import Modal from "../Home/HomeComponant/Modal";
// import Navbar from "../Home/HomeComponant/Navbar";
import Ltsdow from "./Ltsdow";
import './Explor.css'
import Contribute from "../Contribute";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Logimg from "../Home/HomeComponant/Logimg";
import Navbar from "../NewNav/Navbar";
// import Bacimg from "../Home/HomeComponant/Bacimg";
const Explor = () => {
  // const [quary,setQuary]=useState()
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut,setContribut]=useState(false)
  return (
    <div>
      <div><Logimg img="https://images.unsplash.com/photo-1660659236367-710aa4ae7e19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/></div>
      <Navbar op={setOpenmod} conset={setContribut} />
      <div >
        <div className="explor">
        <h1>COLLECTIONS</h1>
        <p>
        Here you can find every category
        </p>
        </div>
        {/* <Surchbar  setquary={setQuary} Quary={quary}/> */}
        <br />
     
        <Excard />
        <div className="st-brand">
          <div className="s-brand ">
            <h3>Our Enterprise Solutions Meet Your Brand &amp; Budget</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              unde ea dolorem repudiandae rerum nam dolor et aut nesciunt
              possimus soluta perspiciatis adipisci deleniti, eveniet, beatae
              error quas voluptatibus temporibus?
            </p>
          </div>
          <Link to="/Pricing" className="btn btn-primary ">view price</Link>
        </div>
        <div className="container-fluid lt-pan">
       
          <Ltsdow/>
         
        </div> 
      </div>
      <Footer/>
      {opencontribut ? <Contribute closeconMod={setContribut} />:""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default Explor;
