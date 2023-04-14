import React from "react";
import "./Cart.css";

export default function Cart(){
    return(
        <div className="Cart">
        <div className="row">
            <div className="Status col-md-2">
            <i class='bx bx-cart' style={{ fontSize: '2.5em' }}>Giỏ hàng</i>
            </div>
            <div className="Status col-md-3">
            <p>Chưa thanh toán:</p>
            <p>1 đơn</p>
            </div>
            <div className="Status col-md-3">
            <p>Đang giao hàng:</p>
            <p>0 đơn</p>
            </div>
            <div className="Status col-md-3">
            <p>Đã hoàn thành:</p>
            <p>1 đơn</p>
            </div>
        </div>

        <div className="row Title">
        <div className="col-md-2">
        <p>Sản phẩm</p>
        </div>
        <div className="col-md-3">
        <p>Đơn giá</p>
        </div>
        <div className="col-md-1">
        <p>Số lượng</p>
        </div>
        <div className="col-md-3">
        <p>Tổng tiền</p>
        </div>
        <div className="col-md-2">
        <p>Trạng thái</p>
        </div>
        <div className="col-md-1">

        </div>
        </div>

        <div className="Wrapper">
        <Product imgSrc="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
         Name="718 Boxster"
         Cost ="4354600000"
         Quantity ="1"
         Status ="Chưa thanh toán"
         />
        <Product imgSrc="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
         Name="718 Boxster"
         Cost ="4354600000"
         Quantity ="2"
         Status ="Chưa thanh toán"
         />
        </div>
        
        <div className="Wrapper">
        <Pay/>
        </div>
        
        </div>
    )
}

function Product({...props}){
    function toggleCheckbox() {
        var checkbox = document.getElementById("myCheckbox");
        if (checkbox.checked) {
          checkbox.checked = false;
        } else {
          checkbox.checked = true;
        }
      }
    return(
        <div className="row Product">
        <div className="col-md-2">
        <img src={props.imgSrc} class="card-img-top" alt = "car" />
        <div class="card-body text-center">
        <p>{props.Name}</p>
        </div>
        </div>
        <div className="col-md-3">
        <p>{(parseInt(props.Cost)).toLocaleString()} VNĐ</p>
        </div>
        <div className="col-md-1">
        <p>{props.Quantity}</p>
        </div>
        <div className="col-md-3">
        <p>{(parseInt(props.Cost) * props.Quantity).toLocaleString()} VNĐ</p>
        </div>
        <div className="col-md-2">
        <p>{props.Status}</p>
        </div>
        <div className="col-md-1">
        <input type="checkbox" id="myCheckbox" onclick="toggleCheckbox()"/>
        </div>
        </div>
    )
}

function Pay({...props}){
    return(
        <div className="Pay row">
        <div className="col-md-3">
        <p>Số đơn: {props.Quantity}</p>
        </div>
        <div className="col-md-6">
        <p>Tổng: {props.total}</p>
        </div>
        <div className="col-md-3">
        <button class="btn-pay">Thanh toán</button>
        </div>
        </div>
    )
}
