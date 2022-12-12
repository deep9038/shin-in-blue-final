import React, { useState } from "react";
import { MdTextFields } from "react-icons/md";
import { useNavigate} from "react-router-dom";
import ClickDetails from "./ClickDetails";
import Finising from "./Finising";
import "./Pictureuplod.css";
// import {BiCloudDownload} from 'react-icons/bi'
import SuccesfullUplod from "./SuccesfullUplod";
import UplodPaginatio from "./UplodPaginatio";
import Uplodsection from "./Uplodsection";
import Bacimg from "../Home/HomeComponant/Bacimg";
const Paidpicup = () => {
  
  const max = 4;
  const [pageCount,setPageCout]=useState(1)
  let navigate = useNavigate();
  // console.log(pageCount);
  return (
    <div className="cotainer">
      <div><Bacimg/></div>
      <div className="row stage-row">
        <div className="col-lg-4 stage-col">
          <div className="stages">
            <div className=" shado-siv">
             

            <div className={pageCount===1? "selectcolor":pageCount>=1?"beforslectcolor":""} >
              <h5>
                <MdTextFields /> General
              </h5>
              <span></span>
            </div>
            <div className={pageCount===2? "selectcolor":pageCount>=2?"beforslectcolor":""}>
              <h5>Image Details</h5>
              <span></span>
            </div>
            <div className={pageCount===3? "selectcolor":pageCount>=3?"beforslectcolor":""}>
              <h5>Finish</h5>
              <span></span>
            </div>
            <div className={pageCount===4? "selectcolor":pageCount>=4?"beforslectcolor":""}>
              <h5>Publish</h5>
              <span></span>
            </div>
          </div>
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <div className="container-fluid filling-page">
            <div className="row">
              <div className="col col-2">
                {" "}
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col col-7 d-flex justify-content-start  align-items-center">
                <p>Submit new Stock image &amp; video</p>
              </div>
              <div className="col col-3 col-but">
                <button className="fil-but"  onClick={() => navigate(-1)}>Exit </button>
              </div>
            </div>
          </div>
          <hr/>
          {pageCount===1? <Uplodsection/>:""}
          {pageCount===2? <ClickDetails/>:""} 
          {pageCount===3? <Finising/>:""} 
          {pageCount===4? <SuccesfullUplod/>:""} 
            <UplodPaginatio setcount={setPageCout} count={pageCount} max={max}/>
        </div>
      </div>
    </div>
  );
};

export default Paidpicup;
