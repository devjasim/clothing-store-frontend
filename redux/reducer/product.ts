import {
    FETCH_PRODUCTS,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    CREATE_PRODUCT,
    ADD_TO_CART,
    ADD_TO_CART_LOCALSTORAGE
  } from "../actionTypes";

  export const products = (cartItems = [], action: any) => {
    switch (action.type) {
      case ADD_TO_CART:
        return [...cartItems, action.payload];
  
      case ADD_TO_CART_LOCALSTORAGE:
        return [...cartItems, ...action.payload]
  
      case DELETE_PRODUCT:
        return cartItems.filter((item) => item !== action.payload);
  
      case UPDATE_PRODUCT:
        return cartItems.map((item) => item === action.payload._id ? action.payload : item);
        
      default:
        return cartItems;
    }
  };
  