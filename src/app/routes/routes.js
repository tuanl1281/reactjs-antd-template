import AppLayout from 'app/components/layout';
import LandingPage from 'app/pages/LandingPage';
import LoginPage from 'app/pages/LoginPage';
import PageNotFound from 'app/pages/PageNotFound';
import TaskPage from 'task/pages/TaskPage';

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
    path: '/tasks',
    component: TaskPage,
    layout: AppLayout,
    isPrivate: true,
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
