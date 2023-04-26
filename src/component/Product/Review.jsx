import { useState } from "react";
import {FaStar} from "react-icons/fa"
import Comment_Rating from "./Comment_Rating";
import StarRating from "./star";
import "./Review.css";

import Avatar from "./avatar.jpg"
export default function Review(){

    return(
        
        <div className="m-3 review-block">
            <div>
                <h1 >
                    Review
                </h1>
                <Comment_Rating/>
            </div>

            <div className="row mt-3 review-container" >
                <div className="col-md-3  review-avatar" >
                    <img id="avatar-img" src={Avatar} alt="avatar"/>
                </div>
                <div className="col-md-8 review-commnent">

                    <div className="row" id="name">
                        Huỳnh Nguyễn Hiếu Nhân
                    </div>
                    <div >
                        <StarRating rating={5} ></StarRating>
                    </div>
                    <div className="row">
                        xe đẹp sang xịn mịn
                    </div>
                </div>
                </div>
        </div>
    );
}