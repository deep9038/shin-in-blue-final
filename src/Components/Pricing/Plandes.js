import React from 'react'
import './Plandes.css'
import {AiFillStar} from 'react-icons/ai'
const Plandes = (props) => {
  return (
    <div className='container plan-card sub'>
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        
        <ul>
        <li><AiFillStar/><p >{props.fet.downlod}</p></li>
        <li><AiFillStar/> <p >{props.fet.accasibality} </p></li>
        <li><AiFillStar/> <p >{props.fet.planTlimit}</p></li>
        <li><AiFillStar/> <p >{props.fet.saport}</p></li>
        
        </ul>
        <button type="submit" className='up-btn'>purchse now</button>
    </div>
  )
}

export default Plandes
