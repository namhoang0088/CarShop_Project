import React from "react";
import "./Login.css";
import { FiMail } from "react-icons/fi";
import { FaKey } from "react-icons/fa";

const FormLogin = () => {
<<<<<<< HEAD
=======
  const [account, setAccount] = useState([]);
  const [Warning, setWarning] = useState([]);
  useEffect(() => {
      axios.get('http://localhost/test-react/webcar-ui/BE/Model/Account-data.php')
        .then(response => setAccount(response.data))
        .catch(error => console.log(error));
    }, []);
    const handleSignIn = (e) => {
      e.preventDefault();
      const email = document.getElementsByName("user_email")[0].value;
      const password = document.getElementsByName("user_password")[0].value;
      verifyAccount(email, password);
    };
    const verifyAccount = (email, password) => {
      if(email=== "" || password === ""){
        setWarning("Hãy nhập đầy đủ thông tin đăng nhập!");
      } else {
        for (let i = 0; i < account.length; i++) {
          if (email === account[i].email && password === account[i].password) {
            // Trùng khớp, chuyển hướng đến trang khác
            setWarning("");
            
            return;
          }
        }
         // Không tìm thấy tài khoản
        setWarning("Tài khoản không hợp lệ!");
      }
     
    };
>>>>>>> 82e80c0fa5b31144f2df06d9a5fbfe85c1d5b621
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
<<<<<<< HEAD
        <div class="a alert alert-danger border-0 bg-white" role="alert">
          Sai mật khẩu hoặc enmail!
=======
        <div class="a alert alert-danger border-0 bg-white" role="alert" style={{color: 'red'}}>
        <div>
          {Warning}
        </div>
>>>>>>> 82e80c0fa5b31144f2df06d9a5fbfe85c1d5b621
        </div>
        <button type="submit" class="btn btn-primary" id="signIn" onClick={handleSignIn}>
          Sign in
        </button>
        <p class="text-center" id="for">
          <a href="#" class="text-primary">
            Quên mật khẩu?
          </a>
        </p>
      </form>
<<<<<<< HEAD
      <button type="submit" class="btn btn-success" id="register">
        Register an account
=======
      <button type="submit" className="btn btn-success" id="register" >
        <Link to="/register" style={{color: "white", textDecoration: "none"}}>Register an account</Link>
>>>>>>> 82e80c0fa5b31144f2df06d9a5fbfe85c1d5b621
      </button>
    </div>
  );
};

export default FormLogin;
