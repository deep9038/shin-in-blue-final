import React from "react";
import { useState } from "react";
// import Navbar from "../Home/HomeComponant/Navbar";
import Contribute from "../Contribute";
import Modal from "../Home/HomeComponant/Modal";
import Sidenavefordas from "./Sidenavefordas";
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
import Navbar from "../NewNav/Navbar";
const Notification = () => {
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  return (
    <div>
      <div><Bacimg/></div>
      <Navbar op={setOpenmod} conset={setContribut} />
      <div className="container-fluid dasbord-conainer">
        <div className="desbord-devider row">
          
          <div className="desbord-matarial col-9">
            <h1>Notification satting</h1>
            <div>
              <p>
                Disable or enable the notifications that you want to receive
              </p>
            </div>
            <div className="container">
              <form action="/NotificationSetting_post" method="post">
                <div className="container">
                  <div className="row">
                    <div className="col cheak_enabel">
                      <b>Your listing has been approved</b>
                      <div className="chek_not">
                        <input
                          type="checkbox"
                          className="ckbox"
                          name="Notification_chek_1"
                        />
                        <label>Enable </label>
                      </div>
                    </div>
                    <div className="col cheak_enabel">
                      <b>Listing expired</b>
                      <div className="chek_not">
                        <input
                          type="checkbox"
                          className="ckbox"
                          name="Notification_chek_2"
                        />
                        <label>Enable </label>
                      </div>
                    </div>
                    <div className="col cheak_enabel">
                      <b>Your have a new downloa</b>
                      <div className="chek_not">
                        <input
                          type="checkbox"
                          className="ckbox"
                          name="Notification_chek_3"
                        />
                        <label>Enable </label>
                      </div>
                    </div>
                    <div className="col-12 cheakbutton">
                      <input
                        type="submit"
                        className="up-btn"
                        value="Save Chang"
                      />
                    </div>
                  </div>
                </div>
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

export default Notification;
