import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";
import { useState } from "react";
import Modal from "../Home/HomeComponant/Modal";
// import Navbar from "../Home/HomeComponant/Navbar";
import Plans from "./Plans";
import Qna from "./Qna";
import Contribute from "../Contribute";
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
import Navbar from "../NewNav/Navbar";
function Pricing() {
    const [openmod, setOpenmod] = useState(false);
    const [opencontribut,setContribut]=useState(false)
    const [cngPlan, setcngPlan] = useState(true);
    const Planchng=() =>{
        setcngPlan(!cngPlan)    
    }
    return (
        <div  >
            <div><Bacimg img="https://images.unsplash.com/photo-1661226613879-38519f4e56a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/></div>
            <Navbar op={setOpenmod}  conset={setContribut}/>
            <h1 style={{textAlign:"center",width:"80%" }} className="d-flex mx-auto my-5 justify-content-center">Find &amp; Buy Millions of Photos That Meet Your Budget</h1>
            <div className="sub-cng ">
                <div className="form-check form-switch but-swich">

                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                        On-Demand
                    </label>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault" 
                        onClick={Planchng}
                        />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                        Subscription
                    </label>
                </div>
                <div className=" d-flex my-2 justify-content-center">
                <Plans cp={cngPlan}/>
                </div>
                <div className="st-brand">
                <div className="s-brand ">
                    <h3>Our Enterprise Solutions Meet Your Brand &amp; Budget</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro unde ea dolorem repudiandae rerum nam dolor et aut nesciunt possimus soluta perspiciatis adipisci deleniti, eveniet, beatae error quas voluptatibus temporibus?</p>
                </div>
                <Link to="/Contact" className="btn  ">Contact us</Link>
                </div>
                <div className='container '>
                 <h1 className=" d-flex aligh-item-center justify-content-center iwic">Frequently Asked Questions</h1>
                <Qna/>
               
                </div>
            </div>
            <Footer/>
            {opencontribut ? <Contribute closeconMod={setContribut} />:""}
            {openmod && <Modal closeModal={setOpenmod} />}
        </div>
    );
}

export default Pricing;
     