import Header from "../header/Header"
import Footer from "../footer/Footer"
import CustomCar from "./CustomCar";
import Specification from "./Specification";
import Review from "./Review";
import "./Product.css"

//import { Col, Row, Container, Button, ButtonGroup, ToggleButton, Form} from "react-bootstrap";

function Product() {
  return (
    <div className="product container-fluid">
        {/* <Header/> */}
        <CustomCar/>
        <Specification/>
        <Review/>
        {/* <Footer/> */}
    </div>
  );
}

export default Product;
