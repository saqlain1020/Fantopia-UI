import axios from 'axios';

export const metadataApi = axios.create({
    baseURL: 'https://metadata-tester.herokuapp.com/api/',
    timeout: 100000,
});

export const marketplaceApi = axios.create({
    baseURL: 'https://crypto-marketplace-api.herokuapp.com/api/',
    timeout: 100000,
});

export const appApi = axios.create({
    baseURL: 'https://crypto-marketplace-api.herokuapp.com/api/',
    timeout: 100000,
});