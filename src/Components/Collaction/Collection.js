import React from "react";
// import Navbar from "../Home/HomeComponant/Navbar";
import Surchbar from "../Surchbar";
import Galary from "./Galary";
import"./Collaction.css"
import { useState } from 'react';
import Modal from "../Home/HomeComponant/Modal";
import Contribute from "../Contribute";
// import {GrLinkTop}from 'react-icons/gr'
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
import BackToTop from "../BackToTopButon/BackToTop";
import Navbar from "../NewNav/Navbar";
const Collection = () => {
  // const [flot,setFlot]=useState(false)
 

  const [quary,setQuary]=useState()
  const [openmod,setOpenmod]=useState(false)
  const [opencontribut,setContribut]=useState(false)
  return (
    <>
    <div>
      <div><Bacimg img="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/></div>
      <Navbar op={setOpenmod}   conset={setContribut} />
      <div className="container exppool d-flex justify-content-center">
        <img
          src="https://photos.shineinblue.com/wp-content/uploads/2022/05/explore-word-made-outdoor-wilderness-260nw-1230559474-removebg-preview-1.png"
          // className="explor "
          alt=""
        />
        <p>You may link some photos from heare </p>
      </div>
      <Surchbar  setquary={setQuary} Quary={quary} />
      <Galary Quary={quary}/>
      <BackToTop/>
    </div>
    
    <Footer/>
    {opencontribut ? <Contribute closeconMod={setContribut} />:""}
    { openmod && <Modal closeModal={setOpenmod}/>}
    </>
  );
};

export default Collection;
