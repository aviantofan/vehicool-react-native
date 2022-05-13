import http from '../../helper/http';
import qs from 'qs';
import RNFetchBlob from 'rn-fetch-blob';
import {REACT_APP_URL} from '@env'

export const authLogin = (email, password) => {
    return async dispatch => {
        dispatch({
            type: 'AUTH_CLEAR_ERR',
        });
        try {
            const input = { email: email, password: password };
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
            const { data } = await http(token).get('/profile');
            dispatch({
                type: 'GET_PROFILE',
                payload: data.result
            });
        } catch (err) {
            payload = err.message;
        }
    };
};

export const updateData = (id, token, name, email, username, gender, phone, birthdate, address, image) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'PAGES_LOADING',
            });
            if(image){
            const { data } = await RNFetchBlob.fetch(
                'PATCH',
                `${REACT_APP_URL}/users/${id}`,
                {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
                [
                    {
                        name: 'image',
                        filename: image.fileName,
                        type: image.type,
                        data: RNFetchBlob.wrap(image.uri),
                    },
                    { name: 'name', data: name },
                    { name: 'username', data: username },
                    { name: 'email', data: email },
                    { name: 'gender', data: gender },
                    { name: 'birthdate', data: birthdate },
                    { name: 'phone', data: phone },
                    { name: 'address', data: address },
                ],
            );
            dispatch({
                type: 'UPDATE_PROFILE',
                payload: JSON.parse(data)
            });
          }else{
            const { data } = await RNFetchBlob.fetch(
              'PATCH',
              `${REACT_APP_URL}/users/${id}`,
              {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'multipart/form-data',
              },
              [
                  { name: 'name', data: name },
                  { name: 'username', data: username },
                  { name: 'email', data: email },
                  { name: 'gender', data: gender },
                  { name: 'birthdate', data: birthdate },
                  { name: 'phone', data: phone },
                  { name: 'address', data: address },
              ],
          );
          dispatch({
              type: 'UPDATE_PROFILE',
              payload: JSON.parse(data)
          });
          }
        } catch (e) {
            payload = JSON.parse(e.response.data.message);
        }
    };
};