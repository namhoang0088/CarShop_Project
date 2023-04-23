import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
import ShowCart from './Cart';
import ShowProducts from './Products';
import Home from './Home';
import Header from '../../component/Header';
function User() {
  return (
    <div>
    <Header />
        <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route exact path="/products" element = {<ShowProducts />} />
        <Route exact path="/cart" element = {<ShowCart />} />
        </Routes>
    </div>
  )
}

export default User