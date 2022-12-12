import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Navbar(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  

  const onMouseEnter = () => {
   
      if (window.innerWidth > 960) {
        
        setDropdown(true);
      }
    
  };
const openDropdown =()=>{
  if(window.innerWidth<960){
    setDropdown(!dropdown)
  }
}
  const onMouseLeave = () => {
  
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  
  };
  const openmodal = () => {
    props.op(true);
    closeMobileMenu();
  };
  const oprnCon = () => {
    props.conset(true);
    closeMobileMenu();
  };

  return (
    <>
      <nav className="N-navbar">
        <Link to="/" className="N-navbar-logo" onClick={closeMobileMenu}>
          <img
            src="https://photos.shineinblue.com/wp-content/uploads/2022/05/logo-sib.png"
            alt=""
          />
        </Link>
        <div className="N-menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "N-nav-menu active" : "N-nav-menu"}>
          <li className="N-nav-item">
            <Link
              to="/Collection"
              className="N-nav-links"
              onClick={closeMobileMenu}
            >
              Explor
            </Link>
          </li>
          <li
            className="N-nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={openDropdown}
          >
            <div
              
              className="N-nav-links"
              
            >
              Dashbord
              <i className="fas fa-caret-down" />
            </div>
            {dropdown && <Dropdown />}
          </li>
          <li className="N-nav-item">
            <Link
              to="/Explor"
              className="N-nav-links"
              onClick={closeMobileMenu}
            >
              Collection
            </Link>
          </li>
          <li className="N-nav-item">
            <Link to="/About" className="N-nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="N-nav-item">
            <Link
              to="/Contact"
              className="N-nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li className="N-nav-item">
            <Link
              to="/Pricing"
              className="N-nav-links"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
          </li>
          <li className="mobileButton">
            <Link
              to="/cart"
              className="N-nav-links-mobile"
              onClick={closeMobileMenu}
            >
              <AiOutlineShoppingCart />
            </Link>
            <div
              
              className="N-nav-links-mobile"
              onClick={openmodal}
            >
              Sign Up
            </div>

            <div  className="N-nav-links-mobile" onClick={oprnCon}>
              Contribute
            </div>
          </li>
        </ul>
        <Button op={props.op} conset={props.conset} />
      </nav>
    </>
  );
}

export default Navbar;
