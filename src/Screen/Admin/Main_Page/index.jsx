import React from "react";
import "./style.css";
import Header from "../../../component/Admin/Header/Header";
import Footer from "../../../component/Footer";
import FullScreenBackground from "../../../component/Background/FullScreenBackground";
import SideBar from "../../../component/Admin/SideBar/SideBar";
export default function AdminHome() {
  return(
      <FullScreenBackground>
        <div>
          <div className="header">
          <Header />
          </div>
          <div className="body">
              <SideBar/>
          </div>
        </div>
      </FullScreenBackground>
  )
}