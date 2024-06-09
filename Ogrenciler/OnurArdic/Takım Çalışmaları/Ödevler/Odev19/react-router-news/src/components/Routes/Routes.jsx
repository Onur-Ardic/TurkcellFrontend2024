import { useRoutes, Navigate } from 'react-router-dom'
import News from '../Views/News'

const Routes = ({ onData }) => {
  const routes = useRoutes([
    { path: '/', element: <Navigate to="/Home" /> },

    {
      path: '/haberler/',
      element: <News onData={onData} />,
    },
    { path: '*', element: <Navigate to="/haberler" /> },
  ])
  return routes
}

export default Routes
