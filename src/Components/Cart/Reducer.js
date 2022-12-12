export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }
  if (action.type === "CLEAR-CART") {
    return {...state,item:[]}
  }
  if(action.type === "INCREMENT"){
     let updetedCart=state.item.map((curElem)=>{
        if(curElem.id === action.payload){
            return{...curElem,quantity:curElem.quantity+1}
        }
        return curElem;
     })
     return{...state,item:updetedCart}
  }
  if(action.type === "DECREMENT"){
    let updetedCart =state.item.map((curElem)=>{
        if(curElem.id === action.payload){
            return{...curElem,quantity:curElem.quantity-1}
        }
        return curElem;
    })
    return{...state,item:updetedCart}

  }
  if(action.type === "GET_TOTAL"){
    let {totalItem, totalAmount} =state.item.reduce((accum,curVal)=>{
        let {price, quantity}=curVal;
        let updetedTotalAmount=price*quantity;
        accum.totalAmount+=updetedTotalAmount;
        accum.totalItem += quantity;
        return accum 
    },
    {
        totalItem:0,
        totalAmount:0,
    });
    return{...state,totalItem,totalAmount}
  }
  return state;
};
