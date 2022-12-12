import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
const Accountgf = () => {
  return (
    
      <div className="join-with my-4 ">
            <div className="google btn ">
              <FcGoogle size={25} />
              <b>Continu with Google</b>
            </div>
            <div className="fb btn">
              <AiFillFacebook size={25} style={{ color: "blue" }} />
              <b>Continu with FaceBook</b>
            </div>
          </div>

  )
}

export default Accountgf
