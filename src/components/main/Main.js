import "./Main.css";
import avatarcard from "../../assets/avatarcard.png";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <div className="main__greeting">
            <h1>PERSONNEL LIST</h1>
            <p>List of all personnels</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Personnel ID: <a className="active_link" href="#!">123456</a></p>
              <span className="font-bold text-title"><i className="fa fa-ellipsis-h"></i></span>
            </div>
            <img width="145" className="avatar_card" src={avatarcard} alt="avatarcard" />
            <div className="bio">
              <p className="name lebel">Name</p>
              <p>First Name Last Name</p>
              <p className="telphone lebel">Telephone</p>
              <p>Phone Number</p>
              <p className="birthday lebel">Birthday</p>
              <p>DD-MM</p>
              <p className="email lebel">Email</p>
              <p>Email Address</p>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Personnel ID: <a className="active_link" href="#!">123456</a></p>
              <span className="font-bold text-title"><i className="fa fa-ellipsis-h"></i></span>
            </div>
            <img width="145" className="avatar_card" src={avatarcard} alt="avatarcard" />
            <div className="bio">
              <p className="name lebel">Name</p>
              <p>First Name Last Name</p>
              <p className="telphone lebel">Telephone</p>
              <p>Phone Number</p>
              <p className="birthday lebel">Birthday</p>
              <p>DD-MM</p>
              <p className="email lebel">Email</p>
              <p>Email Address</p>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Personnel ID: <a className="active_link" href="#!">123456</a></p>
              <span className="font-bold text-title"><i className="fa fa-ellipsis-h"></i></span>
            </div>
            <img width="145" className="avatar_card" src={avatarcard} alt="avatarcard" />
            <div className="bio">
              <p className="name lebel">Name</p>
              <p>First Name Last Name</p>
              <p className="telphone lebel">Telephone</p>
              <p>Phone Number</p>
              <p className="birthday lebel">Birthday</p>
              <p>DD-MM</p>
              <p className="email lebel">Email</p>
              <p>Email Address</p>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Personnel ID: <a className="active_link" href="#!">123456</a></p>
              <span className="font-bold text-title"><i className="fa fa-ellipsis-h"></i></span>
            </div>
            <img width="145" className="avatar_card" src={avatarcard} alt="avatarcard" />
            <div className="bio">
              <p className="name lebel">Name</p>
              <p>First Name Last Name</p>
              <p className="telphone lebel">Telephone</p>
              <p>Phone Number</p>
              <p className="birthday lebel">Birthday</p>
              <p>DD-MM</p>
              <p className="email lebel">Email</p>
              <p>Email Address</p>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}


      </div>
    </main>
  );
};

export default Main;
