import { Link } from "react-router-dom";
import { SwLogoWhite } from "../../assets/iconComponents";
import SidebarIcon from "../SidebarIcon/SidebarIcon";

interface SidebarProps {
  icons: {
    id: string;
    name: string;
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  }[];
}

export default function Sidebar({ icons }: SidebarProps) {
  return (
    <div className="sidebar">
      <Link to={"/"} className="sidebar-icon">
        <SwLogoWhite className="logo" />
      </Link>
      {icons.length > 0 &&
        icons.map((icon) => <SidebarIcon key={icon.id} icon={icon} />)}
    </div>
  );
}
