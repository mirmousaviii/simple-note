import Home from './pages/home';
import Note from './pages/note';
import Login from './pages/login';
import NotFound from './pages/not-found';

export const routes = [
  {path: '/', component: Home, exact: true, isPrivate: false},
  {path: '/login', component: Login, exact: false, isPrivate: false},
  {path: '/note', component: Note, exact: false, isPrivate: true},
  {component: NotFound}, //404 Handler
];
