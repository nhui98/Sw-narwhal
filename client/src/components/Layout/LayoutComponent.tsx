import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { sidebarIconsData } from "../../data/sidebarIconsData";

export default function LayoutComponent() {
  return (
    <div className="layout">
      <div className="sidebar-wrapper">
        <Sidebar icons={sidebarIconsData} />
      </div>
      <div className="main-container">
        <div className="navbar-component">
          <Navbar />
        </div>
        <div className="content-component">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
