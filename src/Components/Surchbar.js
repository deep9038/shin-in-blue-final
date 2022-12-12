import React, {  useState,useEffect }  from "react";

import "./Surchbar.css";
const Surchbar = (props) => {
  const [catnam,setCatnam]=useState()
  
  useEffect(() => {
        props.setquary(catnam)
  },[catnam])
  const surc=(e)=>{
        props.openImges(true)
        props.setquary(e.target.value)
  }
  return (
    <div className="container container-src bg-light">
      <div className="row ">
        <div className="col col-4  px-0 pt-2">
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle dpbut"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p>{catnam? catnam:"CATEGORY"}</p>
            </button>
            <div className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
              <div onClick={()=>setCatnam("All")}>
                <p className="dropdown-item" >All</p>
              </div>
              <div onClick={()=>setCatnam("ARTWARK")}>
                <p className="dropdown-item">ARTWARK</p>
              </div>
              <div onClick={()=>setCatnam("EDITORIAL")}>
                <p className="dropdown-item">EDITORIAL</p>
              </div>
              <div onClick={()=>setCatnam("FREE")}>
                <p className="dropdown-item">FREE</p>
              </div>
              <div onClick={()=>setCatnam("MOCKUP")}>
                <p className="dropdown-item">MOCKUP</p>
              </div>
              <div onClick={()=>setCatnam("PREMIUM")}>
                <p className="dropdown-item">PREMIUM</p>
              </div>
              <div onClick={()=>setCatnam("TEMPLETES")}>
                <p className="dropdown-item">TEMPLETES</p>
              </div>
              <div onClick={()=>setCatnam("VIDEOS")}>
                <p className="dropdown-item">VIDEOS</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col col-7    py-2   ">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for anything try 'outside' "
              aria-label="Search"
              value={props.Quary}
              onChange={surc}
            />
          </form>
        </div>
        <div className="col col-12 col-sm-3   d-flex justify-content-center d-none">
          <button className="btn btn-outline-success btn-primary text-light w-75 m-2" type="submit">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Surchbar;
