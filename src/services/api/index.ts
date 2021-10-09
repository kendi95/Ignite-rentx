import axios from 'axios';
import { ADDRESS, PORT } from '@env';

export const api = axios.create({
  baseURL: `http://${ADDRESS}:${PORT}`
});