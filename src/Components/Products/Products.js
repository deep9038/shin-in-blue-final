import React from 'react'
import './Products.css'
import Productcat from './Product'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from '../Home/HomeComponant/Modal'
import Navbar from '../Home/HomeComponant/Navbar'
import Contribute from '../Contribute'
import Bacimg from '../Home/HomeComponant/Bacimg'
const Products = () => {
    const [openmod, setOpenmod] = useState(false);
    const [opencontribut,setContribut]=useState(false)
    let {filtername}=useParams() 
  return (
    <div>
      <div><Bacimg/></div>
        <Navbar op={setOpenmod} conset={setContribut} />
        <div>
      <Productcat fil={filtername}/>
      </div>
      {opencontribut ? <Contribute closeconMod={setContribut} />:""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  )
}

export default Products
