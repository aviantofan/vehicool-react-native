import axios from 'axios';

const http = token => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: 'http://192.168.0.101:5000',
    headers,
  });
};

export default http
