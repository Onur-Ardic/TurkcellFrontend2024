import React from 'react';
import HomeView from '../wievs/HomeView';
import { useRoutes, Navigate } from 'react-router-dom';
import ParametreView from '../wievs/ParametreView';
import userRouter from './userRouter';
import NewView from '../wievs/NewView';
import SportNewView from '../wievs/SportNewView';
import EconomyNewView from '../wievs/EconomyNewView';

const Router = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <HomeView />
        },
        userRouter,
        {
            path: '/parametre/:id',
            element: <ParametreView />
        }, 
        {
            path: '/haberler/',
            element: <NewView />,
            children: [
                { index: true, element: <Navigate to="spor" /> },
                { path: 'spor', element: <SportNewView /> },
                { path: 'ekonomi', element: <EconomyNewView /> }
            ]
        } 
    ]);
    return routes;
};

export default Router;
