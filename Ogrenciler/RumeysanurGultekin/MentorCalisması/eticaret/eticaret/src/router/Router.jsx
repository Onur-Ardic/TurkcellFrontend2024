import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Home from '../page/Home'
import ProductList from '../components/ProductList';
import Productdetail from '../components/Productdetail';
import Login1 from '../page/Login1';
import Contact from '../page/Contact';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productlist' element={<ProductList/>} />
        <Route path='/productdetail/:id' element={<Productdetail/>} />
        <Route path='/login' element={<Login1/>} />
        <Route path='/contact' element={<Contact/>} /> 
    </Routes>
  )
}

export default Router