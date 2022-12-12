import React from "react";
// import Navbar from "./Home/HomeComponant/Navbar";
import { useState } from "react";
import Contribute from "./Contribute";
import Modal from "./Home/HomeComponant/Modal";
import "./imgdtails.css";
import { useParams } from "react-router-dom";
import Galdata from "./Collaction/Galdata";
import Vander from "./Vander/Vander";
import { Link } from "react-router-dom";
import { MdError } from "react-icons/md";
import Galary from "./Collaction/Galary";
import Bacimg from "./Home/HomeComponant/Bacimg";
import Navbar from "./NewNav/Navbar";
const Imgdetails = () => {
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  let { imgId } = useParams();
  // const[thisimg,setThisimg]=useState()
  const thisimg = Galdata.find((keys)=> keys.imgid==imgId)
  return (
    <div className="valpage">
      <div><Bacimg/></div>
      <Navbar op={setOpenmod} conset={setContribut} />
      <div className="ader-page-img" style={{ position: "relative" }}>
        <Vander
          img={thisimg?.img}
          name={thisimg?.imgname}
          adname={thisimg?.aname}
          ad_img={thisimg?.ad_Img}
        />
      </div>
      <div className="dit">
        <div className="d">
          <div className="ulz-col">
            <div className="item-descrip ">
              <h4>Item Description</h4>
              <div className="iten-p">
                <div className="itm-con">
                  <p>
                    Donec aliquam velit scelerisque lacinia placerat. Duis
                    finibus arcu et tellus luctus sagittis. Donec lacus odio,
                    molestie sed luctus nec, porttitor in diam
                  </p>
                </div>
              </div>
            </div>
            <div className="imgdet">
              <h4>Image details</h4>
              <div className="imgpes">
                <ul>
                  <li>
                    <span>Camera — Nikon D810</span>
                  </li>
                  <li>
                    <span>Lens — 18.0-200.0 mm f/3.5-5.6</span>
                  </li>
                  <li>
                    <span>Exposure time — 1/400s</span>
                  </li>
                  <li>
                    <span>ISO — 160</span>
                  </li>
                  <li>
                    <span>Aperture — ƒ/6.3</span>
                  </li>
                  <li>
                    <span>Focal length — 6.3mm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="ulz-listing-action">
              <div className="ulz-mod-action ">
                <div className="ulz-action-contact">
                  <div className="ulz-action-author">
                    <div className="ulz--avatar">
                      <div className="ulz-avatar">
                        <div className="ulz-avatar-placeholder">
                          <img src={thisimg?.ad_Img} alt="" />
                        </div>
                      </div>{" "}
                      <Link className="ulz--meta" to="/vanderprofile">
                        <span className="ulz--name">admin</span>
                        <div className="ulz--view" >
                          View profile
                        </div>
                      </Link>
                    </div>
                    <div className="ulz--content"></div>
                  </div>

                  <div className="ulz-action-footer">
                    <div className="ulz--action">
                      <Link className="ulz-button" to="/vander">
                        <span>Send message</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ulz-mod-action ulz-mod-action-report">
                <div className="ulz-action-report">
                  <div className="ulz--report ulz-text-center">
                    <Link className="ulz--label" to="/vander">
                      <MdError size={20} style={{ marginRight: "0.5rem" }} />
                      Report this listing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="related">RELATED</h4>
      <Galary/>
      {opencontribut ? <Contribute closeconMod={setContribut} /> : ""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default Imgdetails;
