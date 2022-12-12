import React from "react";
import { Link } from "react-router-dom";
const Vg = (props) => {
   
  return (
    <>
     <Link to={`/Downlod/${props.imgid}`}className="pics" >
      <img src={props.img} alt="" style={{ width: "100%" }} />
    </Link>
   
    </>
  );
};

export default Vg;
