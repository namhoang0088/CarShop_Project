import React from "react";
import "./Account.css";
import Header from "../Header";
import Footer from "../Footer";
export default function Account(){
    return(
        <>
        <div className="main">
        <Header />
        <div className="account">
        <div className="row">
            <div className="col-md-7">
                <div className="info">
                   <label for="name" class="form-lable" >Tên đăng nhập</label>
                   <input type="text" class="form-control" name="name" value="lsdnfkldsnkjdssdf"/>
                </div>
                <div className="info">
                   <label for="name" class="form-lable" >Mật khẩu</label>
                   <input type="text" class="form-control" name="name" value="lsdnfkldsnkjdssdf"/>
                </div>
                <div className="info">
                   <label for="name" class="form-lable" >Email</label>
                   <input type="text" class="form-control" name="name" value="lsdnfkldsnkjdssdf"/>
                </div>
                <div className="info">
                   <label for="name" class="form-lable" >Email</label>
                   <input type="text" class="form-control" name="name" value="lsdnfkldsnkjdssdf"/>
                </div>
                <div className="info">
                   <label for="name" class="form-lable" >Địa chỉ</label>
                   <input type="text" class="form-control" name="name" value="lsdnfkldsnkjdssdf"/>
                </div>
                <div className="info">
                   <label for="name" class="form-lable" >Ngày sinh</label>
                   <input type="date" class="form-control" name="date" id="date" />
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
        <Footer />
        </div>
        </>
    )

}