import { Link, NavLink } from "react-router-dom";
import {
  SwLogoWhite,
  IconCampaign,
  IconTeams,
  IconLeads,
  IconReports,
  IconHelp,
} from "../../assets/iconComponents";
import "./Sidebar.scss";

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

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to={"/"} className="sidebar-icon">
        <SwLogoWhite className="logo" />
      </Link>
      {icons.length > 0 &&
        icons.map((icon) => (
          <NavLink
            to={"/" + icon.name}
            className={({ isActive }) =>
              `sidebar-icon ${isActive ? "active" : ""}`
            }
            key={icon.id}
          >
            <icon.Icon className="icon" />
          </NavLink>
        ))}
    </div>
  );
}
