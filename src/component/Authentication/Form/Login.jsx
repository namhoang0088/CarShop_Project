import React from "react";
import "./Login.css";
import { FiMail } from "react-icons/fi";
import { FaKey } from "react-icons/fa";

const FormLogin = () => {
  return (
    <div id="formLogin">
      <form>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <FiMail class="item" />
          </div>
          <div class="col-10">
            <label for="exampleInputEmail1" style={{ fontSize: "14px" }}>
              Email address
            </label>
            <input
              type="email"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <FaKey class="item" />
          </div>
          <div class="col-10">
            <label for="password" style={{ fontSize: "14px" }}>
              Password
            </label>
            <input
              type="password"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="password"
              placeholder="Enter password"
            ></input>
          </div>
        </div>
        <div class="a alert alert-danger border-0 bg-white" role="alert">
          Sai mật khẩu hoặc enmail!
        </div>
        <button type="submit" class="btn btn-primary" id="signIn">
          Sign in
        </button>
        <p id="for">
          <a href="#" class="text-primary">
            Quên mật khẩu?
          </a>
        </p>
      </form>
      <button type="submit" class="btn btn-success" id="register">
        Register an account
      </button>
    </div>
  );
};

export default FormLogin;
