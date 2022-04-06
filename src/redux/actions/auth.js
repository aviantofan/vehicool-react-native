import http from '../../helper/http'
import qs from 'qs';

export const authLogin = (email, password) => {
  return async dispatch => {
    dispatch({
      type: 'AUTH_CLEAR_ERR',
    });
    try {
      const input = { email: email, password: password };
      console.log(input)
      const { data } = await http().post('/auth/login', qs.stringify(input));
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.result.token,
      });
    } catch (err) {
      let payload = '';
      if (err.response) {
        payload = err.response.data.message;
      } else {
        payload = err.message;
      }
      dispatch({
        type: 'AUTH_ERROR',
        payload: payload,
      });
    }
  };
};
