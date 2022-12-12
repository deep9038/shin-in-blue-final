import React from "react";
import { Link } from "react-router-dom";
import "./Realcard.css";

const Realcard = (props) => {
  return (
    <li>
      <Link to={`/products/${props.cat}`} className="container cat-link" >
          <h4 className=" ">{props.cat}</h4>
      </Link>
      </li>
  );
};

export default Realcard;
