import React from 'react'

const Logimg = (props) => {
  return (
    <div className='back-long-img-container'>
      <div></div>
      <img className="backround-log-img" src={props.img} alt="" />
    </div>
  )
}

export default Logimg
