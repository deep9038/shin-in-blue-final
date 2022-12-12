import React from "react";
import "./Dashbord.css";
import { useState } from "react";

// import Navbar from "../Home/HomeComponant/Navbar";
import Contribute from "../Contribute";
import Modal from "../Home/HomeComponant/Modal";
import Sidenavefordas from "./Sidenavefordas";
import Acc from "./Acc";
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
import Navbar from "../NewNav/Navbar";
const Dashbord = () => {
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
 
  return (
    <div>
      <div><Bacimg/></div>
      <Navbar op={setOpenmod} conset={setContribut} />
      <div className="container-fluid dasbord-conainer">
        <div className="desbord-devider row"> 
          
          <div className="desbord-matarial col-9">
            <h1>Dashboard</h1>
            <div className="profile-page-background-img-container">

              <img src="https://images.unsplash.com/photo-1662105262582-72bc7802cdcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" className="profile-page-background-img" alt="" />
              <div className="peofile-img-container">
                  <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                  <div>
                      <h3>kacy cage</h3>
                  </div>

              </div>
              
            </div>
            

            <Acc />
          </div>
        </div>
      </div>
      <Footer/>
      {opencontribut ? <Contribute closeconMod={setContribut} /> : ""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default Dashbord;
