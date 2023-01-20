import * as api from "../../src/hooks/api";
import {
  ADD_TO_CART,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  REMOVE_FROM_CART,
  ADD_QTY
} from "../actionTypes";
import { notify } from "~/utils/notify";


export const addToCartAction = (id: string) => async (dispatch) => {
  try {
    if(id) {
      await api.getProductById(id).then((res: any) => {
        dispatch({type: ADD_TO_CART, payload: {...res?.data?.result, qty: 1}})
        notify("Product added in cart!", 'success');
      }).catch(err => {
        console.log("ERR");
      });
    }
  } catch (error) {
    console.log(error)
  }
}

export const addToCart = (id:string, qty: string) => async dispatch => {
  dispatch({
    type: ADD_QTY,
    payload: {id, qty},
  })
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

export const deleteProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_PRODUCT, payload: id });
      notify("Product removed from cart!", 'warning');
    } catch (error) {
      console.log(error);
    }
}


export const removeFromCart = (id: string) => (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT, payload: id });
    notify("Product removed from cart!", 'warning');
  } catch (error) {
    console.log(error);
  }
}

export const fetchCart = () => async dispatch => {
  try {
    const {data: strigifyData} = await Api.getRequest(`/api/cart/`)
    // console.log({strigifyData})
    const {carts} = JSON.parse(strigifyData)
    // console.log(carts)

    dispatch({
      type: actionTypes.FETCH_MY_CART,
      payload: {
        carts: convertToCartData(carts),
      },
    })
  } catch (e) {
    console.log('EROROR :  ', e)
  }
}