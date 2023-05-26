import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.freetogame.com/api', // we can use dotenv to store this in a .env file
  headers: {
    'Content-Type': 'application/json',
  }
  // also we can send the token in the headers like: 'Authorization': `Bearer ${token}` (async storage/MMKV)
});

export { axiosInstance };