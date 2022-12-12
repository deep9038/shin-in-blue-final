import React, { useEffect } from "react";
// import Uprnav from "./HomeComponant/naves/Uprnav";
// import Undnav from "./HomeComponant/naves/Undnav";
import Surchbar from "../Surchbar";
import Bacimg from "./HomeComponant/Bacimg";
import "./Home.css";

import Slide from "./HomeComponant/naves/Slide"
import { useState } from "react";
import Modal from "./HomeComponant/Modal";
import Contribute from "../Contribute";

import Galary from "../Collaction/Galary";

// import { backgroundImg,homePageApi} from "../../api/api";
// import axios from "axios";
import { backgroundImg, homeCat } from "../../api/api";
import Navbar from "../NewNav/Navbar";

function Home() {
  const [quary, setQuary] = useState();
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  const [openimges, setOpenImges] = useState(false);
  const [homeImg,setHomeimg]=useState()
  const [cat,setCat]=useState([])
  // const apiUrl='http://192.168.29.146:3000'
 
  // useEffect(()=>{
  //   axios.get(apiUrl +'/api/categoryAPI')
  //   .then(res=>setCat(res.data.result))
  //   console.log('ekhane ekhom home page chol6e'+ homeCat());
  //   setCat(homeCat())
  // },[])

  const getCat = async ()=>{
    try{
      const cato= await homeCat() 
      setCat(cato)
      console.log(cat)
    }catch(error){
      console.log(error);
    }
  }
  const getBackImg = async()=>{
    try{
      const bimg=await backgroundImg()
      setHomeimg(bimg.homeimg[0].path.slice(6))
      console.log(bimg.homeimg[0].path.slice(6));
      
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getBackImg()
    getCat()
  },[])
 
  return (
    <>
      <div>
        <Bacimg img={`http://192.168.29.146:3000/${homeImg}`}/>
      </div>
      <div className="homediv">
        <Navbar op={setOpenmod} conset={setContribut}/>
        <div className="d-flex  flex-column justify-content-center align-items-center container  hading">
          <h1>DIGITAL DOWNLOAD</h1>
          <h3>FOR</h3>
          <h1>EVERYONE</h1>
        </div>
        <Surchbar openImges={setOpenImges} setquary={setQuary} Quary={quary} />
        <div className="">
        {openimges ? (
          quary.length>0 ? (
            <>
              <Slide Quary={quary} cat={cat}/>
              <Galary  Quary={quary}/>
            </>
          ) : (
            <Slide  Quary={quary} cat={cat} />
          )
        ) : (
          <Slide  Quary={quary} cat={cat} />
        )}
        </div>

       
      </div>
      {opencontribut ? <Contribute closeconMod={setContribut} /> : ""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </>
  );
}

export default Home;
