import "./Navbar.css";
import avatar from "../../assets/avatar.png";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a href="#!">Personnel List</a>
      </div>
      <div className="navbar__right">
      <h3>Halo, &nbsp; 
        <a className="active_link" href="#!">
          Gadjian User
        </a>
      </h3>
        <a href="#!">
          <img width="40" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
