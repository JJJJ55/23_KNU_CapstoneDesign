import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.repairproject.net:443',
});

export { instance };
