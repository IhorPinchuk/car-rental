import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://648ae0fd17f1536d65e9e3fc.mockapi.io/adverts',
});
