import Home from './pages/home';
import Note from './pages/note';
import Login from './pages/login';

export const routes = [
  {path: '/home', component: Home, exact: true, private: false},
  {path: '/login', component: Login, exact: false, private: false},
  {path: '/note', component: Note, exact: false, private: true},
];

export const redirects = [
  {from: '/', to: '/home', exact: true},
  {from: '/note-list', to: '/note', exact: true},
];
