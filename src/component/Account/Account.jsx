import React, { useState, useEffect } from "react";
import "./Account.css";
import axios from 'axios';

const Account = (props) =>{
    const [account, setAccount] = useState({});

        useEffect(() => {
        axios
          .get("http://localhost/test-react/webcar-ui/BE/Model/Account-data.php")
          .then((response) => {
            const filteredID = response.data.filter(account => account.id === props.isLogin);
            if (filteredID.length > 0) {
               setAccount(filteredID[0]);
            }
          })
          .catch((error) => console.log(error));
      }, [props.isLogin]);
    return(
        <>
        <div className="main">
        <div className="account">
        <div className="row">
            <div className="col-md-7">
                <div className="info">
                   <label htmlFor="name" className="form-lable">Tên đăng nhập</label>
                   <input type="text" className="form-control" name="name" value={account.name}/>
                </div>
                <div className="info">
                   <label htmlFor="name" className="form-lable">Mật khẩu</label>
                   <input type="text" className="form-control" name="name" value={account.password}/>
                </div>
                <div className="info">
                   <label htmlFor="name" className="form-lable">Email</label>
                   <input type="text" className="form-control" name="name" value={account.email}/>
                </div>
                <div className="info">
                   <label htmlFor="name" className="form-lable">Số điện thoại</label>
                   <input type="text" className="form-control" name="name" value={account.phone_number}/>
                </div>
                <div className="info">
                   <label htmlFor="name" className="form-lable">Địa chỉ</label>
                   <input type="text" className="form-control" name="name" value={account.address}/>
                </div>
                <div className="info">
                   <label htmlFor="name" className="form-lable">Ngày sinh</label>
                   <input type="date" className="form-control" name="date" id="date" value={account.birthday} />
                </div>
            </div>
            <div className="col-md-5">
            <div className="avatar">
            <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png" className="anh"/>
            <input type="file" name="file" id="file"/>
            </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Account;