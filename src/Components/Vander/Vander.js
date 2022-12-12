import React from 'react'

import { BsFillBookmarkCheckFill } from "react-icons/bs";
import Dropdownitm from '../Dropdownitm';
const Vander = (props) => {
  return (
    <div className=' ven'>
      <div className="ven-in-full-img-container">
        <div className=" ven-img-navout">
          <div className="img-na">
            <div className="admin-det">
              <img src={props.ad_img} alt="" />
              <div>
                <p>{props.name}</p>
                <p>{props.adname}</p>
              </div>
            </div>
            <div className="img-option-mnu">
             
              <div className="img-na-item-list">
                <div className="img-nav-tem">
                  <BsFillBookmarkCheckFill />
                </div>
              </div>
              <div className="img-na-item-list dropdown">
                <div className="img-nav-tem p-0">
                  <div className="downlod">
                    <div className="btn-group">
                      <button type="button" className="btn btn-danger nav-text">
                        Downlod
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu">
                        <hr />
                        <Dropdownitm />
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="img-cont cotainer">
          <div className=" van-full-img">
            <img src={props.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vander
