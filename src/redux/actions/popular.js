import http from '../../helper/http';

export const getPopular = () => {
  return async dispatch => {
    try {
      dispatch({
        type: 'PAGES_LOADING',
      });
      const { data } = await http().get('/vehicles/p/populars');
      dispatch({
        type: 'GET_POPULAR',
        payload: data,
      });
      dispatch({
        type: 'PAGES_LOADING',
      });
    } catch (e) {
      dispatch({
        type: 'VEHICLES_ERROR',
        payload: e.response.data.message,
      });
    }
  };
};