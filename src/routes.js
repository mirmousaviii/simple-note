import Home from './pages/home';
import Note from './pages/note';
import Login from './pages/login';

const routes = [
  {path: '/', component: Home, exact: true},
  {path: '/login', component: Login, exact: false},
  {path: '/note', component: Note, exact: false},
];

export default routes;