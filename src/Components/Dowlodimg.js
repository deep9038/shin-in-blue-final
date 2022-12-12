import React from "react";
import "./Dowloimg.css";
import { MdDescription } from "react-icons/md";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
import { TbFrame } from "react-icons/tb";
import Dropdownitm from "./Dropdownitm";
import { Link, useParams } from "react-router-dom";
import Galdata from "./Collaction/Galdata";
import Bacimg from "./Home/HomeComponant/Bacimg";
import { useNavigate } from "react-router-dom";
const Dowlodimg = () => {
  const { product } = useParams();
  const naviget = useNavigate();
  const thisimg = Galdata.find((keys) => keys.imgid == product);
  return (
    <div className="full-img-container">
      <div>
        <Bacimg />
      </div>
      <div className=" in-full-img-container">
        <div className="img-navout">
          <div className="img-nav">
            <Link className="admin-det" to={`/Collection/${thisimg.imgid}`}>
              <img src={thisimg.ad_Img} alt="" />
              <div>
                <p>{thisimg.imgname}</p>
                <p>{thisimg.aname}</p>
              </div>
            </Link>
            <div className="img-option-mnu">
              <div className="img-na-item-list">
                <div className="img-nav-tem">
                  <MdDescription />
                </div>
              </div>
              <Link
                to={`/imgFame/${thisimg.imgid}`}
                className="img-na-item-list"
              >
                <div className="img-nav-tem">
                  <TbFrame />
                </div>
              </Link>
              <div className="img-na-item-list">
                {" "}
                <div className="img-nav-tem nav-text"> Share</div>
              </div>
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
                        Download
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
              <div className="img-na-item-list" onClick={()=>naviget(-1)} >
                <div>X</div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-cont cotainer">
          <div className="full-img">
            <img src={thisimg.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dowlodimg;
