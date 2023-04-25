import React from 'react'
import {Routes, Route} from "react-router-dom";
import Cart from '../../component/Cart/Cart';
import ViewProduct from './Products';
import Home from './Home';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import AuthoMain from '../Authentication/AuthenMain';
function User() {
  return (
    <div>
    <Header />
        <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route exact path="/products" element = {<ViewProduct />} />
        <Route exact path="/cart" element = {<Cart />} />
        <Route exact path="/login" element = {<AuthoMain />} />
        </Routes>
    <Footer />
    </div>
  )
}

export default User