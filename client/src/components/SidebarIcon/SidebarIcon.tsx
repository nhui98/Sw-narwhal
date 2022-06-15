import { NavLink } from "react-router-dom";

interface SidebarIconProps {
  icon: {
    id: string;
    name: string;
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  };
}

export default function SidebarIcon({
  icon: { name, Icon },
}: SidebarIconProps) {
  return (
    <NavLink
      to={"/" + name}
      className={({ isActive }) => `sidebar-icon ${isActive ? "active" : ""}`}
    >
      <Icon className="icon" />
    </NavLink>
  );
}
