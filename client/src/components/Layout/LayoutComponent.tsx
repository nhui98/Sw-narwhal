import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import {
  IconCampaign,
  IconTeams,
  IconLeads,
  IconReports,
  IconHelp,
} from "../../assets/iconComponents";

const icons = [
  {
    id: "1",
    name: "campaign",
    Icon: IconCampaign,
  },
  {
    id: "2",
    name: "teams",
    Icon: IconTeams,
  },
  {
    id: "3",
    name: "leads",
    Icon: IconLeads,
  },
  {
    id: "4",
    name: "reports",
    Icon: IconReports,
  },
  {
    id: "5",
    name: "help",
    Icon: IconHelp,
  },
];

export default function LayoutComponent() {
  return (
    <div className="layout">
      <div className="sidebar-component">
        <Sidebar icons={icons} />
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
