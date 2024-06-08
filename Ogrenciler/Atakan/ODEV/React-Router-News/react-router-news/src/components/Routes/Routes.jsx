import { useRoutes, Navigate } from 'react-router-dom'
import News from '../Views/News'
import Sports from '../Views/Sports'
import Economy from '../Views/Economy'
import Health from '../Views/Health'

const Routes = ({ onData }) => {
  const routes = useRoutes([
    {
      path: '/haberler/',
      element: <News onData={onData} />,
      children: [
        { path: 'spor', element: <Sports /> },
        { path: 'ekonomi', element: <Economy /> },
        { path: 'sağlık', element: <Health /> },
      ],
    },
    { path: '*', element: <Navigate to="/haberler" /> },
  ])
  return routes
}

export default Routes
