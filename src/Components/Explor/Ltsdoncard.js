import React from "react";
// import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Ltsdoncard.css";
const Ltsdoncard = (props) => {
  return (
    <Link to="/" target="_blank" className="photo" style={{backgroundImage: `url(${props.img})`}} ></Link>
  );
};

export default Ltsdoncard;
