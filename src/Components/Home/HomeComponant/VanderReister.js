import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { useState } from "react";
import Axios from "axios";
import Upimg from "./Upimg";
// import { useEffect } from "react";
const VanderReister = (props) => {
  const [openImg,setOpenImg]=useState(false)
  const [pan,setPan] = useState();
  const [ multifile, setMultifile] = useState([]);
  const [profileImg,setProfileImp]= useState()

  // const formData = new FormData();

  //   if(multifile){
  //     Array.prototype.forEach.call(multifile,file=>{
  //     formData.append("multifile", file);
  //   });
  // }

  const [data, setData] = useState({
    Name: "",
    Fname: "",
    Lname: "",
    Email: "",
    Phonnumber: "",
    Pan: "",
    Password: "",
    Re_password: "",
  });
  const Handel = (e) => {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  };

  const onpancard = (e) => {
    setPan(e.target.files[0]);
  };
  // const onmultioffChange=e=>{
  //   const uplod=[...multifile]
  //   e.some((files)=>{
  //     if(uplod.findIndex((f)=>f.name===files.name)=== -1){
  //       uplod.push(files)
  //     }
  //   })
  // }
  
 
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const url = "http://192.168.29.146:3000/api/vendor_Register";

  const Submit = (e) => {
    e.preventDefault();
    //   const formData=new FormData()
    // //   formData.append("profileImg",singelfile)
    //  formData.append("demoPhotoes",multifile)
    Axios.post(
      url,
      {
        Name: data.Name,
        Email: data.Email,
        Phonnumber: data.Phonnumber,
        Fname: data.Fname,
        Lname: data.Lname,
        Pan_card_img:pan,
        Pan: data.Pan,
        profileImg:profileImg,
        demoPhotoes: multifile,
        Password: data.Password,
        Re_password: data.Re_password,
      },
      config
    )
      .then((res) => {
        console.log(res);
        // console.log(singelfile, "eta hol singel file");
        // console.log(multifile, "eta holo multupel file");
      })
      .catch(function (error) {
        alert(error.response.data);
      });
  };

  return (
    <form
      className="reg-box container"
      action="/Vender_Sign_up_post"
      method="post"
      onSubmit={(e) => Submit(e)}
    >
      <input
        type="text"
        className="vender-input"
        name="Name"
        onChange={(e) => Handel(e)}
        placeholder="Enter User Name"
      />
      <div className="row inpu-things">
        <input
          onChange={(e) => Handel(e)}
          type="text"
          className="col-5 vender-input"
          name="Fname"
          placeholder="First Name"
        />
        <input
          onChange={(e) => Handel(e)}
          type="text"
          className="col-5 vender-input"
          name="Lname"
          placeholder="Last Name"
        />
      </div>
      <div className="row inpu-things">
        <input
          onChange={(e) => Handel(e)}
          type="email"
          className="col-5 vender-input"
          name="Email"
          placeholder="Enter Emal"
        />
        <input
          onChange={(e) => Handel(e)}
          type="text"
          className="col-5 vender-input"
          name="Phonnumber"
          placeholder="Enter Your PhonNumber"
        />
      </div>
      <div className="row inpu-things">
      
          <input
            type="file"
            name="Pan_card_img"
            
            multiple
            onChange={onpancard}
            // onChange={handleInputChange}
            className="inputfile "
          />
          <label htmlFor="profileImg" className="inputlabel">
            pan card photo
          </label>
        
        <input
          onChange={(e) => Handel(e)}
          type="text"
          className="col-5 vender-input"
          name="Pan"
          placeholder="Enter Your Pan"
        />
      </div>
      <div className="row inpu-things">
        <input
          onChange={(e) => Handel(e)}
          type="password"
          className="col-5 vender-input"
          name="Password"
          placeholder="Enter Your Password"
        />
        <input
          onChange={(e) => Handel(e)}
          type="text"
          className="col-5 vender-input"
          name="Re_password"
          placeholder="Re_Enter Password"
        />
      </div>
      
    <div onClick={()=>setOpenImg(true)} className="btn picfordemoorprofile">
      uplod picture
      
    </div>
      <input type="submit" value="Register" className="up-btn" />
      <div
        className="regbtn"
        onClick={() => {
          props.op(true);
        }}
      >
        <MdArrowBackIosNew />
      </div>
      {openImg?<Upimg setOpenImg={setOpenImg} profile={setProfileImp} setDemophotos={setMultifile} demophotos={multifile}/>:""}
    </form>
  );
};

export default VanderReister;
