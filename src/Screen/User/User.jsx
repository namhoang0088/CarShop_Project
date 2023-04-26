import React from 'react'
import  { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Cart from '../../component/Cart/Cart';
import ViewProduct from './Products';
import Home from './Home';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import AuthoMain from '../Authentication/AuthenMain';
import Account from '../../component/Account/Account';

function User() {
  const [isLogin, setIslogin] = useState('No');
  const handleLogin = (loginStatus) => {
    setIslogin(loginStatus);
  };
  
  let loginComponent = isLogin === 'No' ? <AuthoMain onLogin={handleLogin} /> : <Account isLogin={isLogin} />;
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ViewProduct />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={loginComponent} />
      </Routes>
      <Footer />
    </div>
  );
}

export default User