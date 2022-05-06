import LandingPage from 'app/pages/LandingPage';
import LoginPage from 'app/pages/LoginPage';
import PageNotFound from 'app/pages/PageNotFound';

const routes = [
  {
    path: '/',
    component: LandingPage,
    layout: null,
    isPrivate: false,
    exact: true,
  },
  {
    path: '/home',
    component: LandingPage,
    layout: null,
    isPrivate: false,
    exact: true,
  },
  {
    path: '/login',
    component: LoginPage,
    layout: null,
    isPrivate: false,
    exact: true,
  },
  {
    path: '*',
    component: PageNotFound,
    layout: null,
    isPrivate: false,
    exact: false,
  },
];

export default routes;