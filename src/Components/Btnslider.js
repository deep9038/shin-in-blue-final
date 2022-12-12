import React from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai";
const Btnslider = ({direction,moveSlide}) => {
    console.log(direction,moveSlide);
  return (
    <button  onClick={moveSlide}
    className={direction==="next"?'btn-slide next': "btn-slide prev"}>
        {direction==="next"?<AiOutlineArrowLeft/>:<AiOutlineArrowRight/> }
    </button>
  )
}

export default Btnslider
