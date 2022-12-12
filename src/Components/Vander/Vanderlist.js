import React from "react";
import { Link } from "react-router-dom";

const Vanderlist = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <hr />
        <Link to={`/Vender/${props.id}`} className="card-title">{props.name}</Link>
        
      </div>
    </div>
  );
};

export default Vanderlist;
