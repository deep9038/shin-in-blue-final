import React from "react";
import Plandata from "./Pricing/Plandata";
const Dropdownitm = () => {
  return (
    <>
      {Plandata.map((val,ind) => {
       
        return (
          <div className="dropdown-item">
       
            <input type="radio" name="deopdon1" id="deopdon1" />{" "}
            <div>
              <p>{val.planName}</p>
              <p>{val.fetures.downlod}</p>
            </div>
            <p className="d-flex justify-content-center align-items-center">
             {val.amount}
            </p>{" "}
          </div>
        );
      })}
    </>
  );
};

export default Dropdownitm;
