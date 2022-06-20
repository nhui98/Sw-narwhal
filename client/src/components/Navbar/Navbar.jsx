import { IconMail, CaretDown } from "../../assets/iconComponents";
import Avatar from "../Avatar/Avatar";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import NotificationIcon from "../NotificationIcon/NotificationIcon";
import { data } from "../../data/data";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="app-name">Narwhal</div>

      <div className="container">
        <Breadcrumbs />

        <div className="menu">
          <NotificationIcon
            icon={IconMail}
            count={data.current_user.notifications_count}
          />
          <div className="menu-settings">
            <div className="user-name">Hello, {data.current_user.name}</div>
            <Avatar avatar={data.current_user.avatar} />
            <CaretDown className="carret-down" />
          </div>
        </div>
      </div>
    </nav>
  );
}
