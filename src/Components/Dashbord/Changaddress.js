import React from "react";

const Changaddress = () => {
  return (
    <div>
    <form action="Addresh_chang_form" method="posts" className="md-3 ad-from">
        <div className="ad-fromdiv"> 
        <label htmlFor="chang_Adress_no" className="form-label">New Phon number</label>
        <input type="number"  className="form-control" name="chang_Adress_no" />
        </div>
        <div> 
        <label htmlFor="chang_Pin_No" className="form-label">New Pin Number</label>
        <input type="text"  className="form-control" name="chang_Pin_No" />
        </div>
        <div> 
        <label htmlFor="chang_Area" className="form-label">New Area</label>
        <input type="text"  className="form-control" name="chang_Area"  />
        </div>
        <div> 
        <label htmlFor="chang_Houe_Name" className="form-label">New House Name</label>
        <input type="text"  className="form-control" name="chang_House_Name"  />
        </div>
        <div> 
        <label htmlFor="chang_city" className="form-label" >New Town/City</label>
        <input type="text"  className="form-control" name="chang_city"  />
        </div>
        <div> 
        <label htmlFor="chang_State" className="form-label">New State</label>
        <input type="text"  className="form-control" name="chang_State"  />
        </div>
        <div> 
        <label htmlFor="chang_Lanmaerk" className="form-label">New Lanmark</label>
        <input type="text"  className="form-control" name="chang_Lanmaerk"/>
        </div>

        <input type="submit" value="Submit" className="up-btn address-btn" />
    </form>
    </div>
  );
};

export default Changaddress;
