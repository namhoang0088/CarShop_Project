import React from "react";
import "./App.css";

import ShowProducts from "./Screen/User/Products";
import Home from "./Screen/User/Home";
import ShowCart from "./Screen/User/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function App() {
  return (
    <div className="Body">
    <ShowCart />
    </div>
  );
}
