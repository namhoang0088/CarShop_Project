import React from "react";
import "./Cart.css";
import  { useState } from 'react';

const products = [
    {
      id: 1,
      imgSrc: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
      Name: "718 Boxster",
      Cost: "4354600000",
      Quantity: "1",
      Status: "Chưa thanh toán"
    },
    {
      id: 2,
      imgSrc: "https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png",
      Name: "718 Boxster",
      Cost: "4354600000",
      Quantity: "2",
      Status: "Chưa thanh toán"
    }
  ];
  
export default function Cart(){
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
  
    function handleToggleCheckbox(cost, quantity, isChecked) {
        setTotalQuantity(prevQuantity => {
          if (isChecked) {
            return prevQuantity + 1;
          } else {
            return prevQuantity - 1;
          }
        });
        setTotalCost(prevCost => {
          if (isChecked) {
            return prevCost + cost * quantity;
          } else {
            return prevCost - cost * quantity;
          }
        });
      }

    return(
        <div className="Cart">
        <div className="row Product">
            <div className="Status col-md-4">
            <i class='bx bx-cart' style={{ fontSize: '2.5em' }}>Giỏ hàng</i>
            </div>
            <div className="Status col-md-3">
            <p>Chưa thanh toán:</p>
            <p>1 đơn</p>
            </div>
            <div className="Status col-md-3">
            <p>Đã thanh toán:</p>
            <p>1 đơn</p>
            </div>
        </div>

        <div className="row Product">
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
        
        <div>
        {products.map(product => (
          <Product
            key={product.id}
            {...product}
            handleToggleCheckbox={handleToggleCheckbox}
          />
        ))}
        
        </div>

        <div>
        <Pay totalQuantity={totalQuantity} totalCost={totalCost}/>
        </div>

        </div>
    )
}

function Product({...props}){
    function toggleCheckbox() {
        const checkbox = document.getElementById(`myCheckbox${props.id}`);
        const isChecked = checkbox.checked;
        props.handleToggleCheckbox(props.Cost, props.Quantity, isChecked);
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
        <input
          type="checkbox"
          id={`myCheckbox${props.id}`}
          onChange={toggleCheckbox}
        />
      </div>
        </div>
    )
}

function Pay({...props}) {
    return (
      <div className="row Product">
        <div className="col-md-3">
          <p>Số đơn: {props.totalQuantity}</p>
        </div>
        <div className="col-md-6">
          <p>Tổng: {(parseInt(props.totalCost)).toLocaleString()} VNĐ</p>
        </div>
        <div className="col-md-3">
          <button className="btn-pay">Thanh toán</button>
        </div>
      </div>
    );
  }
