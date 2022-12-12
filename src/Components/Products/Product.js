import React from "react";
import Galdata from "../Collaction/Galdata";
import Vg from "../Vander/vg";
import Filteroption from "./Filteroption";
import { useState } from "react";
const getFilter=(a,b)=>{
  if(!a){
    return b
  }else{
    return b.filter((item)=>item.imgname.includes(a))
  }
  
}
const  Productcat = (props) => {
  const [quary,setQuary]=useState(props.fil)
  const filterd=getFilter(quary,Galdata)
  return (
    <>
      {/* <h1 className="text-center text-info"></h1> */}
      <div className="container-fluid mx-lg-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3 p-0 filter">
            <Filteroption  setquary={setQuary} Quary={quary} />
          </div>
          <div className="col-md-9 val-gal">
            <div className="val-gal-container">
              {filterd.map((val, ind) => {
                return (
                  <Vg
                  key={ind}
                    imgid={val.imgid}
                    img={val.img}
                    had={val.imgname}
                    det={val.imgdet}
                    aname={val.aname}
                    aimg={val.ad_Img}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productcat;
