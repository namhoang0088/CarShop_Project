import React from "react";
import "./style.css";
import AdminHeader from "../../../component/Admin/Header/AdminHeader";
import AdminSidebar from "../../../component/Admin/SideBar/AdminSidebar";
import FullScreenBackground from "../../../component/Background/FullScreenBackground";
function MainPage() {
  return (
    <FullScreenBackground>
      <div>
        <div className="header">
          <AdminHeader />
        </div>
        <div className="body">
          <AdminSidebar />
        </div>
      </div>
    </FullScreenBackground>
  );
}

export default MainPage;
