import React from "react";
import { useState } from "react";
// import Navbar from "../Home/HomeComponant/Navbar";
import Modal from "../Home/HomeComponant/Modal";
import Contribute from "../Contribute";
import {GrLinkTop} from 'react-icons/gr'
import Vangal from "./Vangal";
import dataven from "./dataven";
import { useParams } from "react-router-dom";
import Bacimg from "../Home/HomeComponant/Bacimg";
import Footer from "../Footer/Footer";
import Navbar from "../NewNav/Navbar";

const VederpageProfile = () => {
  const [flot,setFlot]=useState(false)
  const motaio=()=>{
    if(window.scrollY >=200){
      setFlot(false)
    }
    else{
      setFlot(true)
    }
  }
  const goToTop=()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
  window.addEventListener('scroll', motaio);

  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  const {vaderProfile}=useParams()
  const thisval = dataven.find((keys)=> keys.vanid==vaderProfile)
  console.log(vaderProfile)
  return (
    <div className="ulz-main">
      <div><Bacimg/></div>
      <Navbar op={setOpenmod} conset={setContribut}/>
      <div className="ulz-author-cover">
        <img className="backimg" src="https://media.istockphoto.com/photos/liquefied-natural-gas-tanker-ship-in-sea-picture-id1317634535?b=1&k=20&m=1317634535&s=170667a&w=0&h=6Rfc6nsn5F42tGdQyoMugXPBIJ-_KS1veKJqKMuYdyI=" alt="" />
        <div className="ulz--cover">
          <div className="ulz--inner">
            <div className="ulz--heading">
              <div className="ulz--cover-avatar">
               <img src={thisval.pic} className="vanderimg" alt="" />
              </div>
              <div className="ulz--action">
                <button
                  
                  className="btn follow-btn"
                  data-modal="conversation"
                >
                  <span>FOLLOW</span>
                </button>
                <p className="follower">9999k</p>
              </div>
            </div>
            <h5 className="ulz--name">{thisval.name}</h5>
            <p className="ulz--bio"></p>
          </div>
        </div>
      </div>
      <div className="auhertext">
        <h4 className="ulz-mb-3 ">Author's listings </h4>
      </div>
      <div>
        <Vangal/>
      </div>
      <div className="up-button-con">
    <div className={flot? "d-none": " up-button vert-move"} onClick={goToTop}>
      <GrLinkTop size={20}/>
    </div>
    </div>
    <Footer/>
      {opencontribut ? <Contribute closeconMod={setContribut} /> : ""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default VederpageProfile;
