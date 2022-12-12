import React from "react";
import { useState } from "react";
import Contribute from "../Contribute";
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
import Modal from "../Home/HomeComponant/Modal";
import Navbar from "../NewNav/Navbar";
// import Navbar from "../Home/HomeComponant/Navbar";
import Changaddress from "./Changaddress";
import Sidenavefordas from "./Sidenavefordas";
const Addresh = () => {
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  const [openaddress,setOpenaddress]=useState(false)
  const openadd =()=>{
    setOpenaddress(!openaddress)
  }
  
  return (
    <div>
      <div><Bacimg/></div>
      <Navbar op={setOpenmod} conset={setContribut} />
      <div className="container-fluid dasbord-conainer">
        <div className="desbord-devider row">
       
          <div className="desbord-matarial col-9">
            <h1>Addresh</h1>
            <div>
              <p>You can chang your Addresh if you want</p>
            </div>
            <div className="container">
              <div className="row addressssss">
                <div className="col-md-6 col-9">
                    <div className="ad-div">
                        <div className="sd-text">
                            <b>Billing address</b>
                            <p className="pop">You have not set up this type of address yet.</p>
                        </div>
                        <div className="ad-butten">
                            <button>ADD</button>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-6 col-9">
                <div className="ad-div">
                        <div className="sd-text">
                            <b>Shipping address</b>
                            <p className="pop">You have not set up this type of address yet.</p>
                        </div>
                        <div className="ad-butten" onClick={openadd}  >
                            <button >ADD</button>
                        </div>
                        
                    </div>
                </div>
              </div>
            </div>
           
            {openaddress? <Changaddress/> :""}
          
          </div>
        </div>
      </div>
      <Footer/>
      {opencontribut ? <Contribute closeconMod={setContribut} /> : ""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default Addresh;
