import React from "react";
import "./Contribute.css";
import { useState } from "react";
import { BsCardImage,BsTagFill,BsArrowRight} from "react-icons/bs";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from "react-router-dom";
import Bacimg from "./Home/HomeComponant/Bacimg";
const Contribute = (props) => {
  const [ivcheck,setIvheck]=useState(false)
  const [freebie,setFreeie]=useState(false)
  const [uplodPage,setUplodPage]=useState("")

  const ivunchk =()=>{
    if(freebie){
      setFreeie(!freebie)
    }
    setIvheck(!ivcheck)
  }
  const unfreebie =()=>{
    if(ivcheck){
      setIvheck(!ivcheck)
    }
    setFreeie(!freebie)
  }
  const naviget=()=>{
        if(freebie){
          setUplodPage("/freepicuplod")
        }
        if (ivcheck) {
          setUplodPage("/Paidpicuplod")
        }
     
  }
  return (
    <div className="container-fluid con-modal-container ">
      <div><Bacimg img={"https://images.unsplash.com/photo-1661246458236-0c9dc2f74672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}/></div>
      <div className="con-modal container">
        <h1>Select Submission Type</h1>
        <div className="form-check">
          <div className="container sub-type ">
            <div className="con-div" onClick={ivunchk}>
            <input className="check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  checked={ivcheck} />
              <div className="on-img">
                <BsCardImage size={35}/>
              </div>
              <div className="col-4">Stock image &amp; video</div>
            </div>
            <div className=" con-div" onClick={unfreebie}>
            <input className="check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked={freebie}/>
              <div className="on-img">
                <BsTagFill size={35}/>
              </div>
              <div className="col-4">freebie</div>
            </div>
        </div>
        </div>
        <div className="butt">
            <button className="back-arrow" onClick={()=>{props.closeconMod(false)}}><AiOutlineArrowLeft/> Back</button>
            <button  onClick={naviget}><Link to={uplodPage}> Continue <BsArrowRight/> </Link></button> 
        </div>
      </div>
    </div>
  );
};

export default Contribute;
