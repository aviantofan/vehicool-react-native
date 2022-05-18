import http from "../../helper/http";
import qs from "qs";

export const changePass = (email, code, password, confirmPassword) => {
  return async dispatch => {
    dispatch({
      type: "CHANGE_CLEAR",
    });
    try {
      const dataForgot = { email: email, code: code, password: password, confirmPassword: confirmPassword };
      console.log(dataForgot);
      const { data } = await http().post("/auth/forgotPassword", qs.stringify(dataForgot));
      dispatch({
        type: "AUTH_CHANGE_PASSWORD",
        payload: data.message
      });
    } catch (err) {
      let payload = "";
      if (err.response) {
        payload = err.response.data.message;
      } else {
        payload = err.message;
      }
      dispatch({
        type: "AUTH_ERROR",
        payload: payload,
      });
    }
  };
};