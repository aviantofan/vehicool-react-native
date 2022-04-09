import http from '../../helper/http';

export const getCars = () => {
  return async dispatch => {
    try {
      dispatch({
        type: 'PAGES_LOADING',
      });
      const { data } = await http().get('/vehicles/category?categoryId=1');
      dispatch({
        type: 'GET_CARS',
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

export const getMotorbike = () => {
  return async dispatch => {
    try {
      dispatch({
        type: 'PAGES_LOADING',
      });
      const { data } = await http().get('/vehicles/category?categoryId=2');
      dispatch({
        type: 'GET_MOTORBIKE',
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

export const getBike = () => {
  return async dispatch => {
    try {
      dispatch({
        type: 'PAGES_LOADING',
      });
      const { data } = await http().get('/vehicles/category?categoryId=3');
      dispatch({
        type: 'GET_BIKE',
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
