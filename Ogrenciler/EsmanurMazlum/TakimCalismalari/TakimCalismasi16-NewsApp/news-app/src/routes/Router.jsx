import { useRoutes } from 'react-router-dom';
import HomePage from '../views/HomePage';
import SportNewView from '../views/SportNewView';
import EconomyNewView from '../views/EconomyNewView';
import HealthNewView from '../views/HealthNewView';
import NewDetail from '../views/NewDetail';

const Router = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/haber/:id', element: <NewDetail/>},
    { path: "/spor", element: <SportNewView /> },
    { path: "/ekonomi", element: <EconomyNewView /> },
    { path: "/saglik", element: <HealthNewView /> },
  ]);
  return routes;
}

export default Router