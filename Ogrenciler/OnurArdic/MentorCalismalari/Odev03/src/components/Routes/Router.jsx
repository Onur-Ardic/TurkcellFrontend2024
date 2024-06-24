import { useRoutes } from 'react-router-dom'
import Home from '../HomePage/Home'
import AlbumDetail from '../AlbumDetailPage/AlbumDetail'
import Search from '../SearchPage/Search'

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
    {
      path: '/search',
      element: <Search />,
    },
  ])

  return routes
}

export default Router
