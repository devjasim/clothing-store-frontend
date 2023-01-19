import * as api from "../api";
import {
  ADD_TO_CART,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  ADD_TO_CART_LOCALSTORAGE,
} from "../actionTypes";
import { notify } from "~/utils/notify";

export const createProduct = (formData, showNotification, setNotification) => async (dispatch) => {
    try {
      await api.createProduct(formData).then(res => {
        setNotification("Product created successfully");
        showNotification.current.showToast();
        dispatch({type: CREATE_PRODUCT, payload: res?.data?.result});
      }).catch((err) => {
        setNotification(err.response.data?.message)
        showNotification.current.showToast();
      });
  
    } catch (error) {
      console.log(error)
    }
}

export const addToCartAction = (id: string) => async (dispatch) => {
  try {
    if(id) {
      const existingItems = localStorage.getItem('cartProducts');
      if(!!existingItems) {
        const exists = JSON.parse(existingItems);
        const found = exists.find((item) => item === id);
        if(found) {
          console.log("HELLO");
          notify("Product already in cart!", 'warning');
        } else {
          console.log("ED", exists)
          exists.push(id);
          localStorage.setItem('cartProducts', JSON.stringify(exists));
          dispatch({type: ADD_TO_CART, payload: id});
        }
      } else {
        console.log("EXISt", existingItems);
        dispatch({type: ADD_TO_CART, payload: id});
        const item = [id];
        localStorage.setItem('cartProducts', JSON.stringify(item));
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const cartLocalStorageAction = () => async (dispatch) => {
  try {
    const existingItems = localStorage.getItem('cartProducts');
    if(existingItems) {
      const exists = JSON.parse(existingItems);
      dispatch({type: ADD_TO_CART_LOCALSTORAGE, payload: exists});
    }
  } catch (error) {
    console.log("ERR")
  }
}

export const getProducts = () => async (dispatch) => {
    try {
      await api.getProducts().then(res => {
        dispatch({type: FETCH_PRODUCTS, payload: res?.data});
      }).catch((err) => {
        console.log("ERR", err);
      });
  
    } catch (error) {
      console.log(error)
    }
}

export const deleteProduct = (showNotification, setNotification) => async (dispatch) => {
    try {
    await api.deleteUser(id).then(res => {
        setNotification("Product deleted successfully")
        showNotification.current.showToast();
    });
    dispatch({ type: DELETE_PRODUCT, payload: id });
    } catch (error) {
    setNotification("Product delete failed")
    showNotification.current.showToast();
    console.log(error);
    }
}