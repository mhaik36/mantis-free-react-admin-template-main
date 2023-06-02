import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - Page404
const Page404 = Loadable(lazy(() => import('pages/error/Page404')));

// ==============================|| AUTH ROUTING ||============================== //

const Page404Routes = () =>{return({
  path: '*',
  element: <MinimalLayout />,
  children: [
    {
      path: '*',
      element: <Page404 />
    }
  ],
  
})};

export default Page404Routes;
