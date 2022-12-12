import React from 'react'
import "./Resnav.css"
import { Link } from 'react-router-dom'
const Resnav = () => {
  
  return (
    <>
     <div className="cintainer res-nav ">
            <ul className="navbar-nav m-auto ">
              <li className="nav-link">
                <Link to="/" id="a">Home</Link >
              </li>
              <li className="nav-link">
                <Link to="/Free-stok" id="a">Free stock</Link >
              </li>
              <li className="nav-link">
                <Link to="/Stock-poto-video" id="a">Stock poto and videos</Link >
              </li>
              <li className="nav-link">
                <Link to="/About-us" id="a">About us</Link >
              </li>
              <li className="nav-link">
                <Link to="/Contact" id="a">Contact</Link >
              </li>
              <li className="nav-link" >
                <Link to="/Pricing" id="a" >Pricing</Link >
              </li>
            </ul>
          </div>
    </>
  )
}

export default Resnav
