import React from "react";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Product/Sidebar";
import Products from "../../component/Product/Products";
import  { useState } from 'react';

export default function ShowProducts() {
  return (
    <div className="Body">
    <ViewProduct/>
    <Footer />
    </div> 
  );
}

function ViewProduct() {
  const [selectedBrand, setSelectedBrand] = useState('Porsche');

  const handleBrandClick = (brandName) => {
    setSelectedBrand(brandName);
  }

  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar onBrandClick={handleBrandClick} />
      </div>
      <div className="col-md-9">
        <Products selectedBrand={selectedBrand} />
      </div>
    </div>
  );
}