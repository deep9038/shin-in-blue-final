import React, { useContext } from "react";
import arrow from "../sib2 frametmt/arrow.png";
import cart from "../sib2 frametmt/cart.png";
import Item from "./Item";
import Contribute from "../Contribute";
import Modal from "../Home/HomeComponant/Modal";
import { useState } from 'react';
// import Explordata from "../Explor/Explordata";
import { cartContext } from "./Cart";
// import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Navbar from "../NewNav/Navbar";
const ContextCart = () => {
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut,setContribut]=useState(false)
  // const [cartItems,setCartItem]=useState(Explordata)
  const {item,clearCart, totalItem,totalAmount} = useContext(cartContext);
  if(item.length === 0){
    return(
      <> 
      <Navbar  op={setOpenmod} conset={setContribut}  />
      <header>
        <div className="continue-shopping">
          <img src={arrow} alt="arrow" className="arrow-icon"  />
          <h3>Continue buying</h3>
        </div>
        <div className="cart-icon">
          <img src={cart} alt="cart"/>
          <p>7</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          {" "}
          You have <span className="total-items-count">0</span> items in
          shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((carentItem) => {
                return <Item key={carentItem.id} {...carentItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            cart Total : <span>0</span>
          </h3>
          <button>Checkout</button>
          <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
        </div>
      </section>
      {opencontribut ? <Contribute closeconMod={setContribut} />:""}
        {openmod && <Modal closeModal={setOpenmod} />}
      </>
    )
  }
  return (
    <>
    <Navbar  op={setOpenmod} conset={setContribut}  />
      <header>
        <div className="continue-shopping">
          <img src={arrow} alt="arrow" className="arrow-icon"  />
          <h3>Continue buying</h3>
        </div>
        <div className="cart-icon">
          <img src={cart} alt="cart"/>
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          {" "}
          You have <span className="total-items-count"> {totalItem}</span> items in
          shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((carentItem) => {
                return <Item key={carentItem.id} {...carentItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            cart Total : <span>{totalAmount}₹</span>
          </h3>
          <button>Checkout</button>
          <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
