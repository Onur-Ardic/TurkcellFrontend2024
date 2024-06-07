import React from 'react'
import { Outlet } from 'react-router-dom'

const NewsView = () => {
    return (
        <>
            <h1>News View</h1>
            <Outlet />
        </>
    )
}

export default NewsView