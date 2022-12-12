import React from 'react'
import {MdDone} from 'react-icons/md'
const SuccesfullUplod = () => {
  return (
    <div className="cintainer ulode">
      <div className="finising-wido">
        <span className="ulz--icon">
          <MdDone size={40}/>
        </span>
        <h4 className="ulz--title">Your submission was successful!</h4>
        <p>Your submission has been sent and awaits approval</p>
      </div>
    </div>
  )
}

export default SuccesfullUplod
