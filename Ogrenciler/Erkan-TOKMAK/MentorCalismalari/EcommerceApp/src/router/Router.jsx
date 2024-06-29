import { useRoutes } from 'react-router-dom'
import HomeView from '../views/HomeView'
import ProductView from '../views/ProductView'
import ProductDetailView from '../views/ProductDetailView'

const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView /> },
        {
            path: '/shop', element: <ProductView />,
            children: [
                { index: true, path: ':id', element: <ProductDetailView /> }
            ]
        },

    ])
    return routes
}
export default Router