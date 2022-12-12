import React from "react";
import "./Card.css";
import carddata from "./Cardapi";
import Realcard from "./Realcard";
const getFilter=(a,b)=>{
  if(!a){
    return b
  }else{
    return b.filter((item)=>item.cat.includes(a))
  }
}
const Card = (props) => {
 const filterd=getFilter(props.Quary,carddata)
  return (
    <div className="container slid">
        {filterd.map((val,ind)=>{
          return(
               <Realcard key ={ind}
               cat={val.cat}
               imgsrc={val.Img}
               cetagory={val.cat}
               resalution={val.size}
               /> 
          )
        })}
    </div>
  );
};

export default Card;
