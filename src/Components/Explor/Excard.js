import React from "react";
import Excaardimg from "./Excaardimg";
import Explordata from "./Explordata";
const getFilter=(a,b)=>{
  if(!a){
    return b
  }else{
    return b.filter((item)=>item.catame.includes(a))
  }
  
}

const Excard = (props) => {
  const filterd=getFilter(props.Quary,Explordata)
  return (
    <div className="container">
      <div className="row">
      {filterd.map((val, ind) => {
        return (
          <Excaardimg key={ind} img={val.Img} name={val.catame}/>
        );
      })}
      </div>
      </div>
    
  );
};

export default Excard;
