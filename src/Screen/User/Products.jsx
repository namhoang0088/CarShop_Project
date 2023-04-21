import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Product/Sidebar";
import Products from "../../component/Product/Products";

export default function ShowProducts() {
  return (
    <div className="Body">
    <Header />
    <ViewProduct/>
    <Footer />
    </div> 
  );
}

function ViewProduct(){
  return(
    <div className="row">
      <div className="col-md-3">
      <Sidebar/>
      </div>
      <div className="col-md-9">
        <Products />
      </div>
    </div>
  )
}