import Home from './pages/home';
import Note from './pages/note';
import Login from './pages/login';

export const routes = [
  {path: '/home', component: Home, exact: true},
  {path: '/login', component: Login, exact: false},
  {path: '/note', component: Note, exact: false},
];

export const redirects = [
  {from: '/', to: '/home', exact: true},
  {from: '/note-list', to: '/note', exact: true},
];
