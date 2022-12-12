import React, { useReducer } from "react";
import { createContext } from "react";
import ContextCart from "./ContextCart";
import Explordata from "../Explor/Explordata";
import { reducer } from './Reducer';
import { useEffect } from "react";
export const cartContext = createContext();
const initialState = {
  item:Explordata,
  totalItem:0,
  totalAmount:0,
}
const Cart = () => {
  // const [cartItems,setCartItem]=useState(Explordata)
  const [state,dispatch]=useReducer(reducer,initialState)  
  const removeItem=(id)=>{
    return dispatch({
      type:"REMOVE_ITEM",
      payload:id,
    })
  }
  const clearCart =()=>{
    return dispatch({type:"CLEAR-CART"});
  }
  const increment=(id)=>{
    return dispatch({
      type:"INCREMENT",
      payload:id,
    })
  }
  const decrement=(id)=>{
    return dispatch ({
      type:"DECREMENT",
      payload:id,
    })
  }
  useEffect(()=>{
    dispatch({type:"GET_TOTAL"})
    // console.log("wates up"); 
  },[state.item]);
  return (
    <>
      <cartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
        <ContextCart />
      </cartContext.Provider>
    </>
  );
};

export default Cart;
