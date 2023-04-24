
import Header from "../Header"
import Footer from "../Footer"
import CustomCar from "./CustomCar";
import Specification from "./Specification";
import Review from "./Review";
import "./Product.css"


import { useEffect, useState } from "react";
import axios from "axios"
//import { Col, Row, Container, Button, ButtonGroup, ToggleButton, Form} from "react-bootstrap";

function Product() {
  const [price,setPrice] = useState("0");
  const [carImg,setCarImg] = useState({black:{style1 :[]}});


const fetchProductsImg = async () => {
  try {
    const name = '718%20Cayman';
    const response = await axios.get(`http://localhost/Controller/Products/Car_controller.php?name=${name}`)
    console.log(response.data);
    setCarImg(response.data["img"]);
    setPrice(response.data["price"]); // Lưu danh sách sản phẩm vào state
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
        <Specification/>
        <Review/>
        {/* <Footer/> */}
    </div>
  );
}

export default Product;