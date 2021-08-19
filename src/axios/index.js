import axios from 'axios';
import { baseUrl } from '../constants/constants';
import interceptors from './interceptors';

const instance = axios.create({
	baseURL: baseUrl,
});

interceptors(instance);

export default instance;
