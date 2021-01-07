import Home from './pages/home';
import Note from './pages/note';
import Login from './pages/login';
import NotFound from './pages/not-found';

export const routes = [
  {path: '/home', component: Home, exact: true, private: false},
  {path: '/login', component: Login, exact: false, private: false},
  {path: '/note', component: Note, exact: false, private: true},
  {path: '/not-found', component: NotFound, exact: false, private: false},
  //404 Handler
  {component: NotFound},
];

export const redirects = [
  {from: '/', to: '/home', exact: true},
  {from: '/note-list', to: '/note', exact: true},
];
