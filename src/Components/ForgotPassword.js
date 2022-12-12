import React from 'react'
import { useState } from 'react';
// import Navbar from './Home/HomeComponant/Navbar';
import Contribute from './Contribute';
import "./Forgotpass.css"
import Modal from './Home/HomeComponant/Modal';
import Footer from './Footer/Footer';
import Bacimg from './Home/HomeComponant/Bacimg';
import Navbar from './NewNav/Navbar';
const ForgotPassword = () => {
    const [openmod, setOpenmod] = useState(false);
    const [opencontribut,setContribut]=useState(false)
  return (
    <div className="forgotpass">
      <div><Bacimg/></div>
    <Navbar op={setOpenmod} conset={setContribut} />
    <div><h1>My account</h1></div>
     <div className='container-fluid forgot-password-continer'>
      <h4>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</h4>
       <form action="" className='forgot-pass'>
          <div>
            <label htmlFor="Forgot_password" className='form-label'> Username or email</label>
            <input type="text" className="form-control " name="Forgot_password"  />
             <input type="submit" className='up-btn address-btn' value="Reset Password" />
          </div>

       </form>
     </div>
     <Footer/>
        {opencontribut ? <Contribute closeconMod={setContribut} />:""}
        {openmod && <Modal closeModal={setOpenmod} />}
</div>
  )
}

export default ForgotPassword
