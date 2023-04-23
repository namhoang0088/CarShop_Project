import React from "react";
import "./Login.css";
import { FiMail } from "react-icons/fi";
import { BsQuestionLg, BsFillChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const FormForgotPassword = () => {
  return (
    <div className="register">
      <div className="title-register">
        <div class="d-flex justify-content-center">
          <h1>Forgot password</h1>
        </div>
      </div>
      <div>
        <div id="formForgotRegister">
          <form>
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
            Confirm
          </button>
          <p class="text-center">
            <Link to="/signin">Back to login page</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormForgotPassword;
