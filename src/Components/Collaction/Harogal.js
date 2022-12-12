import React, { useState } from 'react'
import './Herogal.css'

import { Link } from 'react-router-dom'

const Harogal = (props) => {
  const [openDown,setOpenDow]=useState(false)

  return (
    <Link to={`/Downlod/${props.imgid}`} className="pics" onClick={()=>{setOpenDow(!openDown)}}>
      {props.vid?<video src="" className='gla'></video>:<img src={props.img} alt=""  className='gla'/>}
        
       
        <div className=' flex-column justify-content-center content'>
            <h3 className='d-flex  justify-content-center'>{props.had}</h3>
            <p className='d-flex  justify-content-center'>{props.det}</p>
        </div>
        
      </Link>
  )
}

export default Harogal
