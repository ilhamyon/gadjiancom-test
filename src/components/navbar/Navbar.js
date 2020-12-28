import "./Navbar.css";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__right">
        <div className="hi__user">
          <h3>Halo, &nbsp; 
            <a className="active_link" href="#!">
              Gadjian User
            </a>
          </h3>
        </div>
        <a href="#!">
          <img width="55" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
