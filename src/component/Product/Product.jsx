
import Header from "../Header"
import Footer from "../Footer"
import CustomCar from "./CustomCar";
import Specification from "./Specification";
import Review from "./Review";
import Payment from "./Payment";
import "./Product.css"

import {Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
//import { Col, Row, Container, Button, ButtonGroup, ToggleButton, Form} from "react-bootstrap";

function Product() {
  const [price,setPrice] = useState("0");
  const [carImg,setCarImg] = useState({"black":{"style1" :[]}});
  const [specification,setSpecification] = useState([]);

const fetchProductsImg = async () => {
  try {
    const id = "4";
    const response = await axios.get(`http://localhost/Controller/Products/Car_controller.php?id=${id}`)
    console.log(response.data["img"]);
    setCarImg(response.data["img"]);
    console.log(carImg);
    setSpecification(response.data["specification"]); // Lưu danh sách sản phẩm vào state
    setPrice(response.data["specification"][6].value);
  } 
  catch (error) {
    alert( error);
  }
};


  useEffect(() => {
    fetchProductsImg(); // Gọi hàm fetchProducts để thực hiện request API khi component được render
  }, []);

  return (
    <div className="product container-fluid">
        {/* <Header/> */}
        <CustomCar carImg={carImg} price={price}/>
        <Specification specification={specification}/>
        <Review/>
        {/* <Footer/> */}
    </div>
  );
}

export default Product;