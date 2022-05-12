import http from '../../helper/http';
import qs from 'qs';

export const authRegister = (name, email, password) => {
    return async dispatch => {
        dispatch({
            type: 'REGISTER_CLEAR',
        });
        try {
            const input = {
                name,
                email,
                password,
            };
            const { data } = await http().post('/auth/register', qs.stringify(input));
            dispatch({
                type: 'AUTH_REGISTER',
                payload: data,
            });
        } catch (err) {
            let payload = '';
            if (err.response) {
                payload = err.response.data.message;
            } else {
                payload = err.message;
            }
            dispatch({
                type: 'REGISTER_ERR',
                payload: payload,
            });
        }
    };
};
