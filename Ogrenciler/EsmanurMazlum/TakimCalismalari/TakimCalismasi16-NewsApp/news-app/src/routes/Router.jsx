import {useRoutes} from 'react-router-dom';
import HomePage from '../views/HomePage';

const Router = () => {
  const routes = useRoutes([
    {path: '/', element: <HomePage/> }
  ]);
  return routes;
}

export default Router