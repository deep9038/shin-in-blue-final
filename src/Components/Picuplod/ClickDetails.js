import React from "react";

const ClickDetails = () => {
  return (
    <form className="cintainer ulode" action="/camera_details" method="post">
      <h2>Image details</h2>
      <div className="uplod-iput">
        <div className="container">
          <div className="row Click-input">
            <div className="col-4">
              <div className="label-div">
                {" "}
                <label htmlFor=""> Camera</label>
              </div>
              <input type="text" name="Camera" id="" />
            </div>
            <div className="col-4">
              <div>
                {" "}
                <label htmlFor="">Exposure time</label>
              </div>
              <input type="text" name="Exposure_time" id="" />
            </div>
            <div className="col-4">
              <div>
                {" "}
                <label htmlFor="">ISO</label>
              </div>
              <input type="text" name="ISO" id=""/>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ClickDetails;
