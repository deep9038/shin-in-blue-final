import React from "react";
import "./Upimg.css";
const Upimg = (props) => {
    const savingprofile=(e)=>{
        props. profile(e.target.files[0])
    }
    const multifilesave=(e)=>{
        const file = e.target.files[0]
        const demophotos =props.demophotos
        props.setDemophotos([...demophotos,...file])
    }
  return (
    <div className="wraper">
      <h3>profile Image</h3>
      <div className="imgup">
        <input type="file" name="" className="My-file" id=""  onChange={savingprofile}/>
      </div>
      <h3>demo Photos</h3>
      <div className="photo-chous">
        <div className="inputtfile">
          <label>
            1st Photo
            <input type="file" size="60" onChange={multifilesave} />
          </label>
          <label>
            2nd Photo
            <input type="file" size="60" />
          </label>
        </div>
        <div className="inputtfile">
          <label>
            3rd Photo
            <input type="file" size="60" />
          </label>
          <label>
            4th Photo
            <input type="file" size="60" />
          </label>
        </div>
      </div>
      <div className="btn photo-chous-btn" onClick={()=>props.setOpenImg(false)}>
        DONE
      </div>
    </div>
  );
};

export default Upimg;
