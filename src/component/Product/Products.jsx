import React from "react";
import "./Products.css";
export default function Products(){
    return(
        <>
        <Introduce imgSrc="https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png" imgName="Porsche" />
        <div style={{margin:'30px 10px'}}>
        <div className="row">
            <div className="col-md-4">
            <CardProduct imgSrc ="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
            imgAlt = "Carpicture" />
            </div>
            <div className="col-md-4">
            <CardProduct imgSrc ="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
            imgAlt = "Carpicture" />
            </div>
            <div className="col-md-4">
            <CardProduct imgSrc ="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
            imgAlt = "Carpicture" />
            </div>
        </div>
        </div>
        <div style={{margin:'30px 10px'}}>
        <div className="row">
            <div className="col-md-4">
            <CardProduct imgSrc ="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
            imgAlt = "Carpicture" />
            </div>
            <div className="col-md-4">
            <CardProduct imgSrc ="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
            imgAlt = "Carpicture" />
            </div>
            <div className="col-md-4">
            <CardProduct imgSrc ="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
            imgAlt = "Carpicture" />
            </div>
        </div>
        </div>
        <div style={{margin:'30px 10px'}}>
        <div className="row">
            <div className="col-md-4">
            <CardProduct imgSrc ="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
            imgAlt = "Carpicture" />
            </div>
            <div className="col-md-4">
            <CardProduct imgSrc ="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
            imgAlt = "Carpicture" />
            </div>
            <div className="col-md-4">
            <CardProduct imgSrc ="https://img.tinbanxe.vn/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png"
            imgAlt = "Carpicture" />
            </div>
        </div>
        </div>

        <div className="row">
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
        </div>
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
        <p className="card-text">718 Boxster</p>
        <p className="card-text">3.620.000.000 VNĐ</p>
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