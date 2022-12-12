import React from "react";
import "./Galary.css";
import Harogal from "./Harogal";
import Galdata from "./Galdata";

const getFilter=(a,b)=>{
  if(!a){
    return b
  }
  else{
    return b.filter((item)=>item.imgname.includes(a))
  }
  
}
const Galary = (props) => {
  const filterd=getFilter(props.Quary,Galdata)
  return (
    <div className=" mt-5 ">
      <div className="val-gal-container">
        {filterd.map((val,ind) => {
          return (
            <Harogal
              key={ind}
              imgid={val.imgid}
              img={val.img}
              vid={val.video}
              had={val.imgname}
              det={val.imgdet}
              aname={val.aname}
              aimg={val.ad_Img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Galary;
