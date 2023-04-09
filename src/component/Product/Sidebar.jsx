import React from "react";
import "./Sidebar.css";
export default function Sidebar(){
    return(
        <div className="sidebar">
        <h3>A</h3>
        <div className="cardtitle">
            <Brand imgSrc="https://brademar.com/wp-content/uploads/2022/05/Audi-Logo-PNG-3.png" nameBrand="Audi" />
            <Brand imgSrc="https://medias.fcacanada.ca//specs/alfaromeo/media/images/badge//current-badge_457d965994803bd415fc9735d023d1eb.png" nameBrand="AlfaRomeo" />
        </div>

        <h3>B</h3>
        <div className="cardtitle">
            <Brand imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" nameBrand="BMW" />
            <Brand imgSrc="https://static.wixstatic.com/media/f2bf43_36492964b7d648b0b9cb12bb76fd3b46~mv2.png" nameBrand="Baic" />
            <Brand imgSrc="https://www.carlogos.org/car-logos/bentley-logo-1400x800.png" nameBrand="Bentley" />
            <Brand imgSrc="https://preview.thenewsmarket.com/Previews/TNML/StillAssets/1920x1440/518313.png" nameBrand="Bugatti" />
        </div>

        <h3>P</h3>
        <div className="cardtitle">
            <Brand imgSrc="https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png" nameBrand="Porsche" />
            <Brand imgSrc="https://logos-world.net/wp-content/uploads/2021/09/Pagani-Logo.png" nameBrand="Pagani" />
        </div>
        </div>
    )
}

function Brand(props){
    return(
        <div className="brand" style={{display:"flex"}}>
            <img src={props.imgSrc} alt="brand" />
            <p>{props.nameBrand}</p>
        </div>
    )
}