import React from 'react'
import { useContext } from 'react'
import { cartContext } from "./Cart";
const Item = ({Img,catame,price,id,quantity}) => {
const{ removeItem,increment,decrement}=useContext(cartContext)
if(quantity===0){
  removeItem(id)
}
  return (
    <>
    <div className="items-info">
    <div className="product-img">
      <img
        src={Img}
        alt=""
      />
    </div>
    <div className="title">
      <h2>{catame}</h2>
      <p>zoro</p>
    </div>
    <div className="add-minus-quantity">
      <i className="fas fa-minus minus" onClick={()=>decrement(id)}></i>
      <input type="text" placeholder={quantity} />
      <i className="fas fa-plus add" onClick={()=>increment(id)}></i>
    </div>
    <div className="price">
      <h3>{price}₹</h3>
    </div>
    <div className="remove-item">
    <i className="fas fa-trash-alt remove" onClick={()=>removeItem(id)}></i>
    </div>
  </div>
  <hr />
  </>
  )
}

export default Item
