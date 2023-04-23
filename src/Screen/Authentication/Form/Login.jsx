import React, { useState, useEffect }  from "react";
import "./Login.css";
import { FiMail } from "react-icons/fi";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';
const FormLogin = () => {
  const [account, setAccount] = useState([]);
  const [warningEmail, setWarningEmail] = useState([]);
  useEffect(() => {
      axios.get('http://localhost/test-react/webcar-ui/BE/Model/Account-data.php')
        .then(response => setAccount(response.data))
        .catch(error => console.log(error));
    }, []);
    const verifyAccount = (email, password) =>{
      
    }
  return (
    <div id="formLogin">
      <form>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <FiMail class="item" />
          </div>
          <div class="col-10">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="user_email"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <FaKey class="item" />
          </div>
          <div class="col-10">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="password"
              placeholder="Enter password"
              name="user_password"
            ></input>
          </div>
        </div>
        <div class="a alert alert-danger border-0 bg-white" role="alert" style={{color: 'red'}}>
        <div>
          <h1>List of accounts:</h1>
          <ul>
            {account.map((item, index) => (
              <li key={index}>{item.name} - {item.email}</li>
            ))}
          </ul>
        </div>
        </div>
        <button type="submit" class="btn btn-primary" id="signIn">
          Sign in
        </button>
        <p class="text-center" id="for">
          <Link to="/forgotpassword"> Quên mật khẩu?</Link>
        </p>
      </form>
      <button type="submit" class="btn btn-success" id="register">
        <Link to="/register"> Register an account</Link>
      </button>
    </div>
  );
};

export default FormLogin;
