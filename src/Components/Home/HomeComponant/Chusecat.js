import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Chusecat = (props) => {
    const Vender =()=>{
        props.what("vender")
        props.op(false)
        
    }
    const Buyer =()=>{
        props.what("buyer")
        props.op(false)
    }
  return (
    <div className="chuse-be">
      <h1>What do you wnat to be !</h1>
      <div className="be_vender" onClick={Vender}>
        <div className="be_vandr_hader">
          <BsFillCameraFill />
          <p>Upload Photos or sell on market</p>
          <BsArrowRight />
        </div>
        <p className="vender-details">
          Join a netwark of +8m creatives Worldwide.Get hired for shoots and
          distribute your ntwork
        </p>
      </div>
      <div className="be_vender" onClick={Buyer}>
        <div className="be_vandr_hader">
          <AiOutlineShoppingCart />
          <p>By images or book photo shoots</p>
          <BsArrowRight />
        </div>
        <p className="vender-details">
          Create a business account to license royalty-free photography and book
          photo shoots worldwide.
        </p>
      </div>
    </div>
  );
};

export default Chusecat;
