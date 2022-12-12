import React from "react";
import dataven from "./dataven";
import './Vanderprofile.css'
const VenderCorcel = () => {
  return dataven.map((val) => {
    return (
      <div className="carousel-item active ">
        <div className="d-block w-100">
            <div className="cos-container">
                <img src={val.pic} alt="" />
                <div className="cos-text">
                <div>
                    <h1>{val.name}</h1>
                    <h4>{val.types} </h4>
                </div>
                <h2 className="best-wark">best work</h2>
                </div>
            </div>
        </div>
      </div>
    );
  });
};

export default VenderCorcel;
