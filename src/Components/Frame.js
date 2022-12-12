import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import white from '../Components/sib2 frametmt/FRAME WHITE 2.png'
import black from '../Components/sib2 frametmt/FRAME 2.png'
import gold from '../Components/sib2 frametmt/FRAME YELLOW 2.png'
import "./Frame.css";
import { useParams } from "react-router-dom";
import Galdata from "./Collaction/Galdata";
import Pininput from "./Pininput";
import numbers from "./numbers";

const Frame = () => {
  const [pininpt,setPininpt]=useState(false)
  const [pinno,setPinno]=useState()
  const [pinvalis,setPinvalid]=useState(false)
  const [framechang,setFramechang]=useState("unuse")
  let { ProductFrame } = useParams();
  // const[thisimg,setThisimg]=useState()
  const thisimg = Galdata.find((keys) => keys.imgid == ProductFrame);
  const chang =()=>{
    setPininpt(!pininpt)
  }
 
  


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-3 fram-op">
          <div >
          <div className="frame-cont" onClick={()=>setFramechang("white-frame")}>
            <img src={white} alt="" />
              <h3>White</h3>
          </div>
          <div className="frame-cont" onClick={()=>setFramechang("black-frame")}>
            <img src={black} alt="" />
            <h3>Black</h3>
          </div>
          <div className="frame-cont" onClick={()=>setFramechang("Gold-frame")}>
            <img src={gold} alt="" />
            <h3>Gold</h3>
          </div>
          </div>
        </div>
        <div className="col col-9 f-i-c">
          
          <div className={framechang} id="sc">
            <img src={thisimg.img}  alt="" />
          </div>
          <div className="xiao"> 
          <Link className="btn btn-denger" to="/"> back</Link>
          <div className="input-chek-pin">
          <button onClick={chang} className="buy-button" >{pininpt?"buy": "Buy this cover"}</button>
          {pininpt? <Pininput valu={pinno} chang={ setPinno} />:""}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
