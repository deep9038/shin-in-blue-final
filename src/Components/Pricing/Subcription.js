import React from 'react'
import './Subcription.css'
import './Plandes.css' 
const Subcription = (props) => {
  return (
  
      <div className='container plan-card sub-plan'>
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <button type="submit" className='up-btn'>purchse now</button>
    </div>
  
  )
}

export default Subcription
