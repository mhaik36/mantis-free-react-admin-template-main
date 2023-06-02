import { useRoutes } from 'react-router-dom';

import { useAuthContext } from "../hooks/useAuthContext";

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
// import Page404Routes from './Page404Routes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const { user } = useAuthContext()
  return useRoutes([MainRoutes(user), LoginRoutes(user)]);
}
