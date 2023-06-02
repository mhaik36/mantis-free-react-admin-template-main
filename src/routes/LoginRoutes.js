import { lazy } from 'react';
import { Navigate } from "react-router-dom";

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = (isAuth) =>{return({
  path: '/',
  element: isAuth ? <Navigate to={"/dashboard/default"} replace /> :<MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <AuthLogin />
    },
    {
      path: 'register',
      element: <AuthRegister />
    },
    {
      path: '*',
      element:<Navigate to={"/login"} replace />
    },
  ],
  
})};

export default LoginRoutes;
