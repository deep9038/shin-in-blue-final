
import React, { useEffect, useState } from 'react'
import {AiOutlineUp} from 'react-icons/ai'
const BackToTop = () => {
    const [backToTopButton,setBackToTopButton]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    },[])
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div>
      {backToTopButton&&(
        <button style={{
            position:'fixed',
            bottom:"50px",
            right:"50px",
            height:"50px",
            width:"50px",
            fontSize:"20px",
            border:'none',
            background:'linear-gradient(334deg, #1cccd5, transparent)',
            borderRadius:'10px'
        }}
        onClick={scrollUp}
        ><AiOutlineUp/></button>
      )}
    </div>
  )
}

export default BackToTop
