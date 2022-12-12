import React from 'react'
import { useState } from 'react';
import Navbar from '../Home/HomeComponant/Navbar';
import Contribute from '../Contribute';
import Modal from '../Home/HomeComponant/Modal';
import Sidenavefordas from './Sidenavefordas';
import Bacimg from '../Home/HomeComponant/Bacimg';
const Massage = () => {
    const [openmod, setOpenmod] = useState(false);
    const [opencontribut,setContribut]=useState(false)
    return (
    <div>
      <div><Bacimg/></div>
       <Navbar op={setOpenmod} conset={setContribut} />
      <div className='container-fluid dasbord-conainer'>
         
        <div className="desbord-devider row">
          <Sidenavefordas/>
          <div className='desbord-matarial col-9'>
            <h1>Order</h1>
            <div>
              <p>No conversation were fund</p>
              </div>
        
     
          </div>
        </div>
        
      </div>
      {opencontribut ? <Contribute closeconMod={setContribut} />:""}
        {openmod && <Modal closeModal={setOpenmod} />}
      </div>
    )
  }

export default Massage
