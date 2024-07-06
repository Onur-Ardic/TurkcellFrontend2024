import { useRoutes } from 'react-router-dom'
import HomeView from '../views/user/HomeView'
import ProductView from '../views/user/ProductView'
import ProductDetailView from '../views/user/ProductDetailView'
import LoginView from '../views/user/LoginView'
import RegisterView from '../views/user/RegisterView'
import ProfileView from '../views/user/ProfileView'
import ProfileDashboard from '../views/admin/ProfileDashboard'
import DashboardView from '../views/admin/DashboardView'
import ProductPanelView from '../views/admin/ProductPanelView'
import ProductDetailPanelView from '../views/admin/ProductDetailPanelView'
import OrdersDashboardView from '../views/admin/OrdersDashboardView'

const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <HomeView /> },
        {
            path: '/shop', element: <ProductView />,
            children: [
                { index: true, path: ':id', element: <ProductDetailView /> }
            ]
        },
        {path: '/login', element: <LoginView />},
        {path: '/register', element: <RegisterView />},
        {path: '/my-account', element: <ProfileView />},
        {path: '/admin-dashboard', element: <DashboardView />,
            children: [
                {index: true, path: 'products', element: <ProductPanelView />},
                {index: true, path: 'products/:id', element: <ProductDetailPanelView />},
                {index: true, path: 'profile', element: <ProfileDashboard />},
                {index: true, path: 'orders', element: <OrdersDashboardView />},


            ]
        },
        
    ])
    return routes
}
export default Router