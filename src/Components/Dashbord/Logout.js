import React from "react";
import { useState } from "react";
// import Navbar from "../Home/HomeComponant/Navbar";
import Contribute from "../Contribute";
import Modal from "../Home/HomeComponant/Modal";
import Sidenavefordas from "./Sidenavefordas";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
import Navbar from "../NewNav/Navbar";

const Logout = () => {
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  return (
    <div>
      <div><Bacimg/></div>
      <Navbar op={setOpenmod} conset={setContribut} />
      <div className="container-fluid dasbord-conainer">
        <div className="desbord-devider row">
         
          <div className="desbord-matarial col-9">
            <h1>Account Log-in</h1>
            <div>
              <p></p>
            </div>
            <hr />
            <div className="LOGOUT">
              <h2>LOG IN</h2>
              <form action="" className="from-setting">
                <div>
                  <label htmlFor="UserName" className="form-label">
                    Username or email address
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    name="UserName"
                  />
                </div>
                <div>
                  <label htmlFor="Password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control "
                    name="Password"
                  />
                </div>
                <div className="remember-me">
                  <input type="checkbox" name="Remember-me" />
                  <p>Remember me</p>
                </div>
                <br />
                <button className="up-btn">Log Out</button>
                <Link to="/ForgotPassword" className="Forgot-password">
                  {" "}
                  Lost Your Password
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {opencontribut ? <Contribute closeconMod={setContribut} /> : ""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default Logout;
