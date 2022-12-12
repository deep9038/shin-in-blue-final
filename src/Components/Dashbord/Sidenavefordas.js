import React from "react";
import { MdDashboard } from "react-icons/md";
// import { AiFillPlusCircle } from "react-icons/ai";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
// import {AiFillMessage} from "react-icons/ai"
import { IoNotificationsCircle } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
// import {MdAccountTree}from "react-icons/md"
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Sidenavefordas = () => {
  const [openham, setOpenham] = useState(false);
  return (
    <>
      <div onClick={() => setOpenham(!openham)} className="ham">
        {openham ? (
          <GiHamburgerMenu size={30} className="hamberger" />
        ) : (
          <AiOutlineClose size={30} className="hamberger" />
        )}
      </div>
      <div className={openham?" hamberger-manu":"deshbord-manu"}>
        <div className="desbord-manu-item">
          <Link to="/Dashbord" className="d-manu-item">
            <MdDashboard className="icon-des" /> <span>Profile</span>
          </Link>
          
          {/* <Link to="/Assates" className="d-manu-item"><FaArrowAltCircleDown className='icon-des'/><span>Assates</span></Link> */}
          {/* <Link to="/Massge" className="d-manu-item"><AiFillMessage className='icon-des'/><span>Messages</span></Link> */}
          <Link to="/Notification" className="d-manu-item">
            <IoNotificationsCircle className="icon-des" />
            <span>Notifications</span>
          </Link>
          <Link to="/Order" className="d-manu-item">
            {" "}
            <FaShoppingBag className="icon-des" />
            <span>Orders</span>
          </Link>
          <Link to="/DownlodDasbord" className="d-manu-item">
            <FaArrowAltCircleDown className="icon-des" /> <span>Downloads</span>
          </Link>
          <Link to="/Addresh" className="d-manu-item">
            <FaRegAddressCard className="icon-des" /> <span>Addresses</span>
          </Link>
          <Link to="/setting" className="d-manu-item">
            <AiFillSetting className="icon-des" />
            <span>setting</span>
          </Link>
          <Link to="/Log-out" className="d-manu-item">
            <FaLock className="icon-des" />
            <span>Log Out</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidenavefordas;
