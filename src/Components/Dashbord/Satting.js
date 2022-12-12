import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contribute from "../Contribute";
import Bacimg from "../Home/HomeComponant/Bacimg";
import Modal from "../Home/HomeComponant/Modal";
import Navbar from "../NewNav/Navbar";
// import Navbar from "../Home/HomeComponant/Navbar";
import Sidenavefordas from "./Sidenavefordas";
const Satting = () => {
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  return (
    <div>
      <div><Bacimg/></div>
      <Navbar op={setOpenmod} conset={setContribut} />
      <div className="container-fluid dasbord-conainer">
        <div className="desbord-devider row">
         
          <div className="desbord-matarial col-9">
            <h1>Account Satting</h1>
            <div>
              <p></p>
            </div>

            <form
              className="container from-setting"
              action="seting_chang"
              method="post"
            >
              <div className="name">
                <div>
                  <label className="form-label" htmlFor="FName">
                    First Name
                  </label>
                  <input className="form-control" type="text" name="FName" />
                </div>
                <div>
                  <label className="form-label" htmlFor="LNAme">
                    Last Name
                  </label>
                  <input className="form-control" type="text" name="LName" />
                </div>
              </div>
             
              <div>
                <label className="form-label" htmlFor="Email">
                  Email
                </label>
                <input className="form-control" type="email" name="Email" />
              </div>
              <div className="pasword-change-section">
              <Link to="/ForgotPassword" className="Forgot-password">
                  {" "}
                  Lost Your Password
                </Link>
              </div>
              
              <div>
                <label className="form-label" htmlFor="Avatar_image">
                  Avatar image
                </label>
                <input
                  className="form-control type_file"
                  type="file"
                  name="Avatar_image"
                />
                <div class="ulz-field-info">
                  <span>Maximum upload file size: 552 MB.</span>
                </div>
              </div>
              <div>
                <label className="form-label" htmlFor="Cover_image">
                  Cover image
                </label>
                <input
                  className="form-control type_file"
                  type="file"
                  name="Cover_image"
                />
                <div class="ulz-field-info">
                  <span>Maximum upload file size: 552 MB.</span>
                </div>
              </div>
              <div>
                <label className="form-label" htmlFor="Biografical_text">
                  Biographical info
                </label>
                <textarea name="Biografical_text" cols="10" rows="4"></textarea>
              </div>
              <div className="d-flex justify-content-center ">
                <input
                  type="submit"
                  value="SAVE"
                  className="up-btn address-btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {opencontribut ? <Contribute closeconMod={setContribut} /> : ""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default Satting;
