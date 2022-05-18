import http from '../../helper/http';

export const getVehicleList = () => {
  return async dispatch => {
    try {
      dispatch({
        type: 'PAGES_LOADING',
      });
      const { data } = await http().get('/vehicles?limit=10');
      dispatch({
        type: 'GET_VEHICLE_LIST',
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