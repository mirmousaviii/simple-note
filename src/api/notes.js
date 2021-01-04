import HttpClient from '../utils/http-client';

export const getNoteList = (token) => HttpClient(
    'GET',
    '/notes',
    null,
    null,
    token,
);

export const addNote = (token, data) => HttpClient(
    'POST',
    '/notes',
    data,
    null,
    token,
);

export const deleteNote = (token, id) => HttpClient(
    'DELETE',
    `/notes/${id}`,
    null,
    null,
    token,
);