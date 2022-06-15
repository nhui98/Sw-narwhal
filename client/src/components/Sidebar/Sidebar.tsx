import { useState } from "react";
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
  const [selectedIcon, setSelectedIcon] = useState<String>("1");
  return (
    <div className="sidebar">
      <div className="sidebar-icon">
        <SwLogoWhite className="logo" />
      </div>
      {icons.length > 0 &&
        icons.map((icon) => (
          <div
            className={`sidebar-icon${
              icon.id === selectedIcon ? " active" : ""
            }`}
            key={icon.id}
            onClick={() => setSelectedIcon(icon.id)}
          >
            <icon.Icon className="icon" />
          </div>
        ))}
    </div>
  );
}
