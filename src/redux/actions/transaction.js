import http from '../../helper/http';
import qs from 'qs';

export const getData = (dataTransaction) => {
    return async dispatch => {
        try {
            const data = await dataTransaction;
            dispatch({
                type: 'GET_DATA_TRANSACTION',
                payload: data
            });
        } catch (err) {
            console.log('Data Error');
        }
    };
};

export const inputTransaction = (token, dataInput) => {
    return async dispatch => {
        try {
            const { data } = await http(token).post('/histories', qs.stringify(dataInput));
            dispatch({
                type: 'INPUT_TRANSACTION',
                payload: data.results
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERR',
                payload: payload,
            });
        }
    };
};