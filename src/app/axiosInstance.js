import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 5000,
    headers: {
        'X-API-Key': process.env.API_KEY,
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    }
});