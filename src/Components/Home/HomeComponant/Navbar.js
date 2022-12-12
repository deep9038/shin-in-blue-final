import React from "react";
import Undnav from "./naves/Undnav";
import "./Navbar.css";
import Uprnav from "./naves/Uprnav";
import { Link } from "react-router-dom";
// import Resnav from "./naves/Resnav";

const Navbar = (props) => {
  
  return (
    <>
      <Uprnav set={props.op}  conset={props.conset}/>
      {/* <Resnav/> */}
      
      <Undnav set={props.op} conset={props.conset}/>
    </>
  );
};

export default Navbar;
