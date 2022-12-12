import React from "react";
import { useState } from "react";
import Contribute from "../Contribute";
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
import Modal from "../Home/HomeComponant/Modal";
import Navbar from "../NewNav/Navbar";
// import Navbar from "../Home/HomeComponant/Navbar";
import Sidenavefordas from "./Sidenavefordas";
const DowlodDasbord = () => {
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  return (
    <div>
      <div><Bacimg/></div>
      <Navbar op={setOpenmod} conset={setContribut} />
      <div className="container-fluid dasbord-conainer">
        <div className="desbord-devider row">
          
          <div className="desbord-matarial col-9">
            <h1>Downlods</h1>
            <div>
              <p>Your Downloads</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {opencontribut ? <Contribute closeconMod={setContribut} /> : ""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default DowlodDasbord;
