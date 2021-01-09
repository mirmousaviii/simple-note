import HttpClient from '../utils/http-client';

export const getNoteList = () => HttpClient(
    'GET',
    '/notes',
);

export const addNote = (data) => HttpClient(
    'POST',
    '/notes',
    data,
);

export const deleteNote = (id) => HttpClient(
    'DELETE',
    `/notes/${id}`,
);