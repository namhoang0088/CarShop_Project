import React from "react";
import "./Style-header.css";
export default function Header(){
    return(
        <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <a href="#" className="navbar-brand" ><img src="https://upload.wikimedia.org/wikipedia/vi/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png" alt="" width="70" height="70"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto" >
                    <li className="nav-item">
                        <a href="#" className="nav-link" id="Title">Trang chủ</a> 
                    </li> 
                    <li className="nav-item active">
                        <a href="#" className="nav-link" id="Title">Tin tức</a> 
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" id="Title">Sản phẩm</a>
                        <ul class="dropdown-menu">
                          <li><a href="#" class="dropdown-item">Link</a></li>
                          <li><a href="#" class="dropdown-item">Another link</a></li>
                          <li><a href="#" class="dropdown-item">A third link</a></li>
                        </ul>
                    </li>
                    <li className="nav-item active">
                        <a href="#" className="nav-link" id="Title">Thông tin</a> 
                    </li>
                </ul>
                <div  className="d-flex me-2 " id="header-icon">
                <form role="search" className="d-flex">
                    <input className="form-control" type="text" placeholder="Search" />
                    <button className="btn" type="button"><i class='bx bx-search-alt-2' style={{ fontSize: '2em' }}></i></button>
                </form>
                </div>
                <div className="header-icon">
                <button className="btn" type="button"><i class='bx bx-cart' style={{ fontSize: '2em' }}></i></button>
                </div>
                <div className="header-icon">
                <Link to="/login" className="btn" type="button"><i class='bx bxs-user' style={{ fontSize: '2em' }}></i> </Link>
                </div>
            </div>
        </div>
        </nav>
        </div>
    )
}

