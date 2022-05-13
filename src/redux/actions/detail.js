import http from '../../helper/http';

export const getVehicleDetail = id => {
    return async dispatch => {
        dispatch({
            type: 'VEHICLES_CLEAR'
        });
        try {
            const { data } = await http().get(`/vehicles/${id}`);
            dispatch({
                type: 'GET_VEHICLE_DETAIL',
                payload: data.result,
            });
        } catch (e) {
            dispatch({
                type: 'VEHICLES_ERROR',
                payload: e.response.data.message,
            });
        }
    };
};