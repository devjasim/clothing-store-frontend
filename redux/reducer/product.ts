import {
    FETCH_PRODUCTS,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    CREATE_PRODUCT,
    ADD_TO_CART,
    ADD_QTY
  } from "../actionTypes";

  export const products = (cartItems = [], action: any) => {
    switch (action.type) {
      case ADD_TO_CART:
        return [...cartItems, action.payload];
  
      case ADD_QTY:
        const find = (cartItems || []).find(({_id}) => _id === action.payload.id);
        if(find) {
          const data: {} = find;
          console.log("DATA", data);
          const payload = {
            ...data,
            qty: action.payload.qty
          }
          return cartItems.map((item) => item._id === payload._id ? payload : item);
        }
  
      case DELETE_PRODUCT:
        console.log("PAY", action.payload)
        return cartItems.filter((item) => item._id !== action.payload);
  
      case UPDATE_PRODUCT:
        return cartItems.map((item) => item === action.payload._id ? action.payload : item);
        
      default:
        return cartItems;
    }
  };
  