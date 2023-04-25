import { useState } from "react";
import {FaStar} from "react-icons/fa"
import CommentRating from "./CommentRating";
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
                <CommentRating/>
            </div>

            <div className="row mt-3 review-container" >
                <div className="col-sm-2  review-avatar" >
                    <img id="avatar-img" src={Avatar} alt="avatar"/>
                </div>
                <div className="col-sm-8 review-commnent">

                    <div className="row" id="name">
                        Huỳnh Nguyễn Hiếu Nhân
                    </div>
                    <div className="row">
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