import axios from 'axios';

// eslint-disable-next-line
export const API_BASE_URL = () => 'https://gist.githubusercontent.com/nept/0f311e330a7881fff35d9a8aca129bb2/raw/1227b03c6f85950095b302c4c0c5f5843a604094';

/**
 * Instance axios
 * @type {axios.AxiosInstance}
 */
export const loggedInstance = () => axios.create({
  baseURL: `${API_BASE_URL()}`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});