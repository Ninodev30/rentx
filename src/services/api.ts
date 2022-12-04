import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    //baseURL: 'http://10.1.1.109:3333',
    //    "api": "json-server ./src/services/server.json --host 10.1.1.109 --port 3333 --delay 700"
    baseURL: 'http://192.168.1.102:3333'
});

export default api;