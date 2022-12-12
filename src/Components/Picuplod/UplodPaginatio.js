import React from "react";

const UplodPaginatio = (props) => {
  console.log(props.max);
  const plus = () => {
    props.setcount(props.count + 1);
    if (props.count >= 4) {
      props.setcount(4);
    }
  };
  const minus = () => {
    props.setcount(props.count - 1);
    if (props.count <= 1) {
      props.setcount(1);
    }
  };
  return (
    <div className="pagination">
      <span className="progres"></span>
      <div className="upback" onClick={minus}>
        <button className="up-btn">
          <span> </span>
          <span>Back</span>
        </button>
      </div>
      <div className="ulz--cell ulz--cell-steps">
        <div className="ulz--steps">
          <span className="ulz--steps-current">{props.count}</span>
          &nbsp;/&nbsp;
          <span className="ulz--steps-total">{props.max}</span>
        </div>
      </div>
      <div className="upback  forwrd">
        <button className="up-btn" onClick={plus}>
          <span className="cnt-spa"> </span>
          <span>continu</span>
        </button>
      </div>
    </div>
  );
};

export default UplodPaginatio;
