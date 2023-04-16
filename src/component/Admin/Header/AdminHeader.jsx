import React from "react";
import "./../../Style-header.css";
import "./Header.css";
import NotificationIcon from "../../Icon/Notification/NotificationIcon";

export default function AdminHeader(){
    const notificationCount = 3;
    return(
        <div className="Header"> {/* Thêm className="Header" vào đây */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand" ><img src="https://upload.wikimedia.org/wikipedia/vi/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png" alt="" width="70" height="70"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto" ></ul>
                        <div className="header-icon header-dropdown">
                            <button className="btn" type="button"><i class='bx bxs-bell-ring' style={{ fontSize: '2em' }}><NotificationIcon notificationCount={notificationCount} /></i></button>
                        </div>
                        <div className="header-icon header-dropdown">
                            <button className="btn" type="button"><i class='bx bx-message-rounded-dots' style={{ fontSize: '2em' }}><NotificationIcon notificationCount={notificationCount} /></i></button>
                        </div>
                        <div className="header-icon header-dropdown">
                            <button className="btn" type="button"><i class='bx bxs-user' style={{ fontSize: '2em' }}></i></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}
