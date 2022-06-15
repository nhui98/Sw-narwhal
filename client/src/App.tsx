import Sidebar from "./components/Sidebar/Sidebar";
import {
  SwLogoWhite,
  IconCampaign,
  IconTeams,
  IconLeads,
  IconReports,
  IconHelp,
} from "./assets/iconComponents";

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

export default function App() {
  return (
    <div className="sidebar">
      <Sidebar icons={icons} />
    </div>
  );
}
