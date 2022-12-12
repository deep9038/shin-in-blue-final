import React from "react";
import { useState } from "react";
// import Navbar from "../Home/HomeComponant/Navbar";
import Contribute from "../Contribute";
import Modal from "../Home/HomeComponant/Modal";
import Sidenavefordas from "./Sidenavefordas";
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
import Navbar from "../NewNav/Navbar";
const Entris = () => {
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  return (
    <div>
      <div><Bacimg/></div>
      <Navbar op={setOpenmod} conset={setContribut} />
      <div className="container-fluid dasbord-conainer">
        <div className="desbord-devider row">
          
          <div className="desbord-matarial col-9">
            <h1>Entris</h1>
            <div>
              <p> no Entris are here right now</p>
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

export default Entris;
