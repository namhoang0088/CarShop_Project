import React from "react";
import "./Login.css";
import { FiMail } from "react-icons/fi";
import {
  BsFillCalendarEventFill,
  BsTelephoneFill,
  BsQuestionLg,
  BsFillChatDotsFill,
} from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { FaKey, FaSignature, FaLock } from "react-icons/fa";

const FormRegister = () => {
  return (
    <div id="formLogin" style={{ marginTop: 0 }}>
      <form>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <FaSignature class="item" />
          </div>
          <div class="col-10">
            <label for="name">FULL NAME</label>
            <input
              type="text"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="name"
              placeholder="Enter your name"
              name="user_name"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <FiMail class="item" />
          </div>
          <div class="col-10">
            <label for="email">EMAIL ADDRESS</label>
            <input
              type="email"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              name="user_email"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <FaKey class="item" />
          </div>
          <div class="col-10">
            <label for="password">PASSWORD</label>
            <input
              type="password"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="password"
              placeholder="Enter password"
              name="user_password"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <FaLock class="item" />
          </div>
          <div class="col-10">
            <label for="con_password">CONFIRM PASSWORD</label>
            <input
              type="password"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="con_password"
              placeholder="Enter confirm password"
              name="user_repassword"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <BsFillCalendarEventFill class="item" />
          </div>
          <div class="col-10">
            <label for="birthday">DATE OF BIRTH</label>
            <input
              type="date"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="birthday"
              placeholder="Enter your birthday"
              name="user_birthday"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <ImLocation2 class="item" />
          </div>
          <div class="col-10">
            <label for="address">ADDRESS</label>
            <input
              type="text"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="address"
              placeholder="Enter your address"
              name="user_address"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <BsTelephoneFill class="item" />
          </div>
          <div class="col-10">
            <label for="phonenumber">PHONE NUMBER</label>
            <input
              type="text"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="phonenumber"
              placeholder="Enter your phone number"
              name="user_phonenumber"
            ></input>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <BsQuestionLg class="item" />
          </div>
          <div class="col-10">
            <div class="input-group">
              <label for="question">QUESTION</label>
              <select
                class="custom-select border-0"
                id="question"
                name="user_question"
              >
                <option selected>Select Question</option>
                <option value="1">Sở thích của bạn là gì</option>
                <option value="2">Bạn sống ở đâu</option>
                <option value="3">Biệt danh của bạn là gì</option>
                <option value="4">Bạn đang làm nghề gì</option>
              </select>
            </div>
          </div>
        </div>
        <div class="a form-group shadow-sm d-flex align-items-center">
          <div class="col-2 ">
            <BsFillChatDotsFill class="item" />
          </div>
          <div class="col-10">
            <label for="answer">ANSWER</label>
            <input
              type="text"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="answer"
              placeholder="Enter your answer"
              name="user_answer"
            ></input>
          </div>
        </div>
        <div class="a alert alert-danger border-0 bg-white" role="alert">
          Sai mật khẩu hoặc enmail!
        </div>
      </form>
      <button type="submit" class="btn btn-success" id="register">
        Sign Up
      </button>
      <p class="text-center">
        Already have an account?{" "}
        <a href="#" class="text-success">
          {" "}
          Sign in
        </a>
      </p>
    </div>
  );
};

export default FormRegister;
