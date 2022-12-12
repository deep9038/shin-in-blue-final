import React from "react";

const Select = (props) => {
  return (
    <label className="cat-label">
      <input type="checkbox" onChange={(e)=>props.Handel(e)} name={props.name} value={props.item}/>
      <span className="real-chebox"></span>
      <span className="cat-text">{props.item}</span>
    </label>
  );
};

export default Select;
