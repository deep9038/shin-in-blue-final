import React from "react";
import { AiFillLock } from "react-icons/ai";
import "./Uprnav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import cart from '../../../sib2 frametmt/cart.png';
import {AiOutlineShoppingCart} from "react-icons/ai"


const Uprnav = (props) => {
  const [colorChange, setColorchange] = useState(false);

 
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <div className={colorChange ? "colorchang-nave" : "dont-colorchang-nave"}>
        <nav className="navbar navbar-expand uper">
          <div className="container-fluid justify-content-center">
            <Link to="/" className="navbar-brand">
              <img
                src="https://photos.shineinblue.com/wp-content/uploads/2022/05/logo-sib.png"
                alt="Brand-logo"
                // width={100}
                id="brand-img"
              />
            </Link>

            <div className="cintainer nav-manu uper-nav-manu">
              <ul className="navbar-nav m-auto ">
                <li className="nav-link">
                  <Link to="/Explor">Collection</Link>
                </li>
                <li className="nav-link">
                  <Link to="/Collection">Explor</Link>
                </li>

                <li className="nav-link">
                  <Link to="/About">About us</Link>
                </li>
                <li className="nav-link">
                  <Link to="/Contact">Contact</Link>
                </li>
                <li className="nav-link">
                  <Link to="/Pricing">Pricing</Link>
                </li>
                <li className="nav-link">
                  <Link to="/Dashbord">Dashbord</Link>
                </li>
              </ul>
            </div>
            <div className="user-panel-log-cart-ragister">
            
                <Link to="/cart" className="cart-in-nave">
                    <AiOutlineShoppingCart size={25}/>
                </Link>
                
                <div className="log-in-pannel">
                  {" "}
                  <AiFillLock size={20} />
                  <p
                    className=""
                    onClick={() => {
                      props.set(true);
                    }}
                  >
                    Sign in
                  </p>
                </div>
                <div
                  className="contribute"
                  onClick={() => {
                    props.conset(true);
                  }}
                >
                  <p
                    className=""
                   
                  >
                    Contribute
                  </p>
                </div>
              
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Uprnav;
