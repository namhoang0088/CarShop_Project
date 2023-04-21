import React from "react";
import FormLogin from "./Form/Login";
import FormRegister from "./Form/Register";
import "./AuthenMain.css";

const AuthoMain = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 d-flex justify-content-center">
          <img
            id="logo"
            src="https://t4.ftcdn.net/jpg/02/27/63/25/360_F_227632568_14m9psbulgRfz5QWsuzp9pTMmjJnczGU.jpg"
          ></img>
        </div>
        <div class="col-lg-6">
          <FormLogin />
          {/* <FormLogin /> */}
        </div>
      </div>
    </div>
  );
};

export default AuthoMain;
