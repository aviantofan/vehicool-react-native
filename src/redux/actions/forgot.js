import http from "../../helper/http";
import qs from "qs";

export const authForgot = (email) => {
  return async dispatch => {
    dispatch({
      type: "FORGOT_CLEAR",
    });
    try {
      const dataForgot = { email: email };
      console.log(dataForgot);
      const { data } = await http().post("/auth/forgotPassword", qs.stringify(dataForgot));
      dispatch({
        type: "AUTH_FORGOT",
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
