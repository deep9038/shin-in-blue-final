import React from 'react'
import './Plans.css'
import Spacialplandat from './Spacialplandat'
import Plandes from './Plandes'
import Plandata from './Plandata'
import Subcription from './Subcription'
const Plans = (props) => {
  const cp = props.cp; 
  if (cp) {
    
 
  return(
   <div className='d-flex flex-lg-row  flex-column justify-content-center  m-lg-0 plan-cards'>
    
       {Plandata.map((val,ind)=>{
        return(
          
        <Plandes 
        key={ind}
        name={val.planName}
        price={val.amount}
        fet={val.fetures}
        />
        )
       })}
   </div>
  )
      }else{
        return(
          <div className='d-flex flex-lg-row  flex-column justify-content-center  m-lg-0 plan-cards'>
              {Spacialplandat.map((val,ind)=>{
        return(
          
        <Subcription 
        key={ind}
        name={val.planmane}
        price={val.planprice}
        />
        )
       })}

          </div>
        )
      }
 
}

export default Plans
