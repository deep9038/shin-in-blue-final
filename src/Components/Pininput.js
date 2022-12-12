import React from 'react'
const Pininput = (props) => {
     
  return (
    <div className="input-pin">
        <label className='form-label' htmlFor="Pin">Enter zip code</label>
        <input className="form-control" type="text" value={props.valu} onChange={(e)=>props.chang(e.target.value)} />

    </div>
  )
}

export default Pininput
