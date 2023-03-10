import * as api from "../api";
import { AUTH } from "../actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // Login the user...
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // Login the user...
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
