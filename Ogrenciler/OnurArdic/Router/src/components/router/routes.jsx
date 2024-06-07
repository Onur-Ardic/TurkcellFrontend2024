import { useRoutes, Navigate } from 'react-router-dom'
import NewView from '../views/NewView'
import SportNewView from '../views/SportNewView'
import HomeView from '../views/homeview'

const Router = () => {
  const routes = useRoutes([
    { path: '/', element: <HomeView /> },

    {
      path: '/haberler/',
      element: <NewView />,
      children: [
        { index: true, element: <Navigate to="spor" /> },
        { path: 'spor', element: <SportNewView /> },
      ],
    },
  ])
  return routes
}

export default Router
