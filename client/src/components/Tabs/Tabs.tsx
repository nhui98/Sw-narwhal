import { NavLink } from "react-router-dom";

interface TabsProps {
  tabs: {
    title: string;
    to: string;
  }[];
}

export default function Tabs({ tabs }: TabsProps) {
  return (
    <div className="tabs">
      {tabs.length > 0 &&
        tabs.map(({ title, to }) => (
          <NavLink
            to={to}
            end
            key={title}
            className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
          >
            <span>{title}</span>
          </NavLink>
        ))}
    </div>
  );
}
