import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://43.202.47.103:5000',
});

export { instance };
