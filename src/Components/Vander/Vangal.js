import React from 'react'
import Galdata from '../Collaction/Galdata'
import "./Vangal.css"
import Vg from './vg'
const Vangal = () => {
  return (
    <div className='val-gal-container'>
      {Galdata.map((val,ind)=>{
        return(
        <Vg imgid={val.imgid}
        img={val.img}
        had={val.imgname}
        det={val.imgdet}
        aname={val.aname}
        aimg={val.ad_Img} />

        )
      })}
    </div>
  )
}

export default Vangal
