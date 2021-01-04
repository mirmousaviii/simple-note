import HttpClient from '../utils/http-client';

export const getToken = (data) => HttpClient(
    'POST',
    '/auth/token',
    data,
);
