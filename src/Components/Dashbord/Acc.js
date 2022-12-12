import React from 'react'
import {AiOutlineShoppingCart,AiOutlineDownload} from "react-icons/ai"
import {FaRegAddressCard} from 'react-icons/fa'
// import {FaShoppingBag} from "react-icons/fa"
import {MdAccountTree}from "react-icons/md"
import {BsArrowRightShort} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Acc = () => {
  return (
    <div>
      <div className="acssasoris">
        <div className="acssasoris-item">
            <div className="account-details conshuit">
            <MdAccountTree className='icon-ass'/>
            <Link class="ulz--title" to='/setting'>Account details<BsArrowRightShort/></Link>
            <p className="ulz-mt-1 ulz-mb-0">Provide personal details and how we can reach you</p>
            </div>
        </div>
        <div className="acssasoris-item">
        <div className="Massage conshuit">
        <AiOutlineShoppingCart className='icon-ass'/>
        <Link class="ulz--title" to='/cart'>Cart<BsArrowRightShort/></Link>
            <p class="ulz-mt-1 ulz-mb-0">Provide personal details and how we can reach you</p>
            </div>
        </div>
        <div className="acssasoris-item">
        <div className="My-order conshuit">
        <AiOutlineDownload className='icon-ass'/>
        <Link class="ulz--title" to='/DownlodDasbord'>Downlod<BsArrowRightShort/></Link>
            <p class="ulz-mt-1 ulz-mb-0">Provide personal details and how we can reach you</p>
            </div>
        </div>
        <div className="acssasoris-item">
        <div className="Notification conshuit">
        <FaRegAddressCard className='icon-ass'/>
        <Link class="ulz--title" to='/Addresh'>Addresh<BsArrowRightShort/></Link>
            <p class="ulz-mt-1 ulz-mb-0">Provide personal details and how we can reach you</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Acc
