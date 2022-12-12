import React from 'react'
import { Link } from 'react-router-dom'
import VenderCorcel from './VenderCorcel'

const Vanders= () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      
    <div className="carousel-inner">

     <VenderCorcel/>
     <div className="carousel-caption d-md-block">
        <h5>Our Top 5 Vendor</h5>
        <Link to="/Vender">ALL VENDERS</Link>
       
      </div>
     </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    
  </div>
  )
}

export default Vanders
