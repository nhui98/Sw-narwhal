import { IconMail, CaretDown } from "../../assets/iconComponents";
import { data } from "../../data/data";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="app-name">Narwhal</div>

      <div className="container">
        <div className="breadcrumbs">Teams</div>

        <div className="menu">
          <div className="menu-notification">
            <div className="notification-icon">
              <IconMail />
            </div>
            <div className="notification-count">
              {data.current_user.notifications_count}
            </div>
          </div>

          <div className="menu-settings">
            <div className="user-name">Hello, {data.current_user.name}</div>
            <div className="user-avatar">
              <img src={data.current_user.avatar} alt="User Avatar" />
            </div>
            <div className="carret-down">
              <CaretDown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
