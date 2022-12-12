import React from 'react'
import "./Bacimg.css"

const Bacimg = (props) => {
  return (
    <div className='back-img-container'>
      <div></div>
      <img className="backround-img" src={props.img} alt="" />
    </div>
  )
}

export default Bacimg
