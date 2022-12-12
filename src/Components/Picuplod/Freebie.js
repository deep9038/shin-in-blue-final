import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UplodPaginatio from './UplodPaginatio';
import {MdTextFields} from 'react-icons/md'
import Finising from './Finising';
import SuccesfullUplod from './SuccesfullUplod';
import FreeUplod from './Freeuplod/FreeUplod';
import Bacimg from '../Home/HomeComponant/Bacimg';
const Freebie = () => {
  const max = 3;
  const [pageCount,setPageCout]=useState(1)
  if(pageCount>max){
    setPageCout(max)
  }
  // console.log(pageCount);
  return (
    <div className="cotainer">
      <div><Bacimg/></div>
      <div className="row stage-row">
        <div className="col-4 stage-col">
          <div className="stages">
            <div className=" shado-siv">
            <div className={pageCount===1? "selectcolor":pageCount>=1?"beforslectcolor":""} >
              <h5>
                <MdTextFields /> General
              </h5>
              <span></span>
            </div>
            
            <div className={pageCount===2? "selectcolor":pageCount>=2?"beforslectcolor":""}>
              <h5>Finish</h5>
              <span></span>
            </div>
            <div className={pageCount===3? "selectcolor":pageCount>=3?"beforslectcolor":""}>
              <h5>Publish</h5>
              <span></span>
            </div>
          </div>
          </div>
        </div>
        <div className="col-8">
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
                <Link className="fil-but" to="/">Exit </Link>
              </div>
            </div>
          </div>
          <hr/>
          {pageCount===1?<FreeUplod/>:""}
          {pageCount===2? <Finising/>:""} 
          {pageCount===3? <SuccesfullUplod/>:""} 
          <UplodPaginatio setcount={setPageCout} count={pageCount}  max={max}/>
        </div>
      </div>
    </div>
  )
}

export default Freebie
