import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link">
          <i className="fa fa-home"></i>
          <a href="#!">Beranda</a>
        </div>
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-users" aria-hidden="true"></i>
          <a href="#!">Personnel List</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <a href="#!">Daily Attendance</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
