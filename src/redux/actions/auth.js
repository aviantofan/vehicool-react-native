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

export const dataUser = (token) => {
  return async dispatch => {
    try {
      const { data } = await http(token).get('/profile')
      dispatch({
        type: 'GET_PROFILE',
        payload: data.result
      })
    } catch (err) {
      payload = err.message
    }
  }
}

export const updateData = (token, userData) => {
  return async dispatch => {
    try {
      const dataUpdate = {
        birthdate: userData.birthdate,
        phone: userData.phone,
        address: userData.address,
        gender: userData.gender
      }
      const { data } = await http(token).patch(`/users/${id}`, qs.stringify(dataUpdate))
      dispatch({
        type: 'UPDATE_PROFILE',
        payload: data.results
      })
    } catch (err) {
      payload = err.message
    }
  }
}