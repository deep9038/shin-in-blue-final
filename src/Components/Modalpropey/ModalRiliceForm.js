import React from "react";
// import Navbar from "../NewNav/Navbar";
import './MFForm.css'
const ModalRiliceForm = () => {
  return (
    <>
      {" "}
      <div className="styles_right_ZzT0n">
        <h2 className="styles_from_headingnOkGo">Create Account</h2>
        <input
          type="text"
          className="styles_input91EOK"
          placeholder="Username"
        />
        <input type="text" className="styles_input91EOK" placeholder="Email" />
        <input
          type="password"
          className="styles_input91EOK"
          placeholder="Password"
        />
        <button className="styles_btnaQaxq">Sign Up</button>
        <p className="styles_textpHSSq">or</p>
        <button className="styles_google_btnPgqp7">
          <img src="" alt="google icon" />
          <span>Sign up with Google</span>
        </button>
        <p className="styles_text_pHSSq">
          Already Have an Account ? <a href="/login">Log In</a>
        </p>
      </div>
    </>
  );
};

export default ModalRiliceForm;
