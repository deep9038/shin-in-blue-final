import React from "react";
import { useState } from "react";
// import Navbar from "../Home/HomeComponant/Navbar";
import Modal from "../Home/HomeComponant/Modal";
import Contribute from "../Contribute";
import Surchbar from "../Surchbar";
import dataven from "./dataven";
import Vanderlist from "./Vanderlist";
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
import Navbar from "../NewNav/Navbar";
// import Navbar from "../NewNav/Navbar";
const getFilter=(a,b)=>{
  if(!a){
    return b
  }else{
    return b.filter((item)=>item.name.includes(a))
  }
}
const Vederpage = () => {
  const [quary,setQuary]=useState()
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  const filterd=getFilter(quary,dataven)
  return (
    <div>
      <div><Bacimg/></div>
      <Navbar op={setOpenmod} conset={setContribut} />
      <br />
      <div className="container">
        <Surchbar setquary={setQuary} Quary={quary}  />
        <br />
        <br />
        <hr />
        <div className="vender-cont">
          <div>
            <h1>Venders</h1>
            <p>
              Explor your favourite Vendor,Consider follow to support their Work
            </p>
          </div>
          <br />
          <div className="container">
          <div className="row ven-row">
                
            {filterd.map((val) => {
              return (
                <div className="col-lg-3 col-md-4 p-3 col profile">
                    <Vanderlist img={val.pic} name={val.name} id={val.vanid}/>
                    </div>
              );
            })}
            
                </div>
          </div>
        </div>
      </div>
      <Footer/>
      {opencontribut ? <Contribute closeconMod={setContribut} /> : ""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default Vederpage;
