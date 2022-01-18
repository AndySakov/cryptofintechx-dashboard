import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://5u35m7cyajmu4s57.cryptofintechx.com/api',
    timeout: 5000,
    headers: {
        'X-API-Key': process.env.API_KEY,
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    }
});