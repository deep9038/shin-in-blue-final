import React from "react";
import "./curcalnav.css"
import { Link } from "react-router-dom";
import {AiFillHome} from "react-icons/ai"
import {BsFillCollectionFill} from "react-icons/bs"
import {FcAbout} from "react-icons/fc"
import {IoMdContacts} from "react-icons/io"
import { useState } from "react";
import {FaMoneyBillAlt} from "react-icons/fa"
const Curcalnav = (props) => {
  const [checked, setChecked] = useState(props.click);
  return (
    <div className="curcal-manu">
      <nav className="manu">
        <input
          type="checkbox"
          className="manu-toggle"
          id="manu-toggler"
          checked={checked}
          onChange={(e)=>setChecked(e.target.checked)}
        />
        <label htmlFor="manu-toggler"></label>
        <ul>
          <li className="manu_item">
            <Link to="/" >
             <AiFillHome size={30}/>
            </Link>
          </li>
          <li className="manu_item">
            <Link to="/Free-stok" >
            <BsFillCollectionFill size={30}/>
            </Link>
          </li>
         
          <li className="manu_item">
            <Link to="/About" >
              <FcAbout size={30}/>
            </Link>
          </li>
          <li className="manu_item">
            <Link to="/Contact" >
              <IoMdContacts size={30}/>
            </Link>
          </li>
          <li className="manu_item">
            <Link to="/Pricing" >
            <FaMoneyBillAlt size={30}/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Curcalnav;
