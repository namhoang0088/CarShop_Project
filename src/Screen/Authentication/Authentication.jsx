import React from "react";
import AuthoMain from "./AuthenMain";
import Register from "./Form/Register";
import { Routes, Route, useLocation } from "react-router-dom";
import FullScreenBackground from "../../component/Background/FullScreenBackground";

function Authentication() {
  return (
    <Routes>
      <Route path="/" element={<AuthoMain />} />
      <Route path="/signin" element={<AuthoMain />} />
      <Route path="/register" element={<Register />} />
    </Routes> 
  );
}

export default Authentication;
