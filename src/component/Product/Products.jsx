
import "./Products.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Products(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost/test-react/webcar-ui/BE/Model/Products-data.php')
          .then(response => setProducts(response.data))
          .catch(error => console.log(error));
      }, []);

    return(
        <>
        <Introduce imgSrc="https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png" imgName="Porsche" />
        <div style={{margin:'30px 10px'}}>
        <div className="row">
        {products.map(product => (
            <div className="col-md-4">
            <CardProduct 
            imgSrc = {product.image}
            imgAlt = "Carpicture" 
            name = {product.name}
            price = {product.price}
            />
            </div>
        ))}

        </div>
        </div>

       {/* <div className="row">
            <div className="col-sm-3">

            </div>
            <div className="col-sm-6">
            <div className="pagination stylepag">
            <ul>
            <a className="page-link" href="#"><li>Previous</li></a>
            <a className="page-link" href="#"><li>1</li></a>
            <a className="page-link" href="#"><li>2</li></a>
            <a className="page-link is-active" href="#"><li>3</li></a>
            <a className="page-link" href="#"><li>4</li></a>
            <a className="page-link" href="#"><li>5</li></a>
            <a className="page-link" href="#"><li>6</li></a>
            <a className="page-link" href="#"><li>Next</li></a>
            </ul>
            </div>
            </div>
            <div className="col-sm-3">

            </div>
        </div> */}
        </>
    )
}

function CardProduct(props){
    return (
        <div class="card">
        <div class="card_heart">
        <i style={{ fontSize: '2em' }} class='bx bxs-heart'></i>
        </div>
        <div class="card_cart">
        <i style={{ fontSize: '2em' }} class='bx bx-cart-alt' ></i>
        </div>
        <img src={props.imgSrc} class="card-img-top" alt = {props.imgAlt} />
        <div class="card-body text-center">
        <p className="card-text">{props.name}</p>
        <p className="card-text">{(parseInt(props.price)).toLocaleString()} VNĐ</p>
        </div>
        </div>
    )
}

function Introduce(props){
    return(
        <div className="introduce">
        <div>
            <h2 className="namelogo">{props.imgName}</h2>
            <img className="logoproduct" src={props.imgSrc} alt="logo" />
        </div>
        <p>Dr. Ing. h. c. F. Porsche AG thường được gọi tắt là Porsche, thành lập từ ngày 25 tháng 4 năm 1931, 
        là một công ty chuyên sản xuất xe hơi thể thao hạng sang của Đức kiêm thương hiệu con trực thuộc 
        Volkswagen AG - tập đoàn ô tô hàng đầu thế giới cũng như gia tộc nhà Porsche. Với triết lý tạo ra 
        những mẫu xe thể thao và tốc độ. Không những vậy những chiếc Porsche còn nổi tiếng với sự bền bỉ và sang trọng.</p>
    </div>
    )
}