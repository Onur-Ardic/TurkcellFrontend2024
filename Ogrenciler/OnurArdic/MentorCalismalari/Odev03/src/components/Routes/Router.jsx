import { useRoutes } from 'react-router-dom'
import Home from '../HomePage/Home'
import AlbumDetail from '../AlbumDetailPage/AlbumDetail'

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/albums/:id',
      element: <AlbumDetail />,
    },
    {
      path: '*',
      element: <Home />,
    },
  ])

  return routes
}

export default Router
