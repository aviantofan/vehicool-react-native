import http from '../../helper/http';

export const getVehicleDetail = id => {
  return async dispatch => {
    try {
      const { data } = await http().get(`/vehicles/${id}`);
      dispatch({
        type: 'GET_VEHICLE_DETAIL',
        payload: data.results,
      });
    } catch (e) {
      dispatch({
        type: 'VEHICLES_ERROR',
        payload: e.response.data.message,
      });
    }
  };
};