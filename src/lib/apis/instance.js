import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3.37.37.124:5000',
});

export { instance };
