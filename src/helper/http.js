import axios from 'axios';
import {REACT_APP_URL} from '@env'

const http = token => {
    const headers = {};
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    return axios.create({
        baseURL: REACT_APP_URL,
        headers,
    });
};

export default http;
