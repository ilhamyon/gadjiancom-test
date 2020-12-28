import "./Main.css";
import React, { Component } from "react";


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      fetch("https://randomuser.me/api/?results=4")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            id: `${data.id.value}`,
            firstName: `${data.name.first}`,
            lastName: `${data.name.last}`,
            telepon: `${data.phone}`,
            birthday: `${data.dob.date}`,
            email: `${data.email}`,
            thumbnail: `${data.picture.large}`,

          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
      const {items } = this.state;
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
            <div className="main__cards">
              {
                items.length > 0 ? items.map(item => {
                const {id, firstName, lastName, telepon, birthday, email, thumbnail} = item;
                return (
                    <div className="card">
                      <div className="card_inner">
                        <p className="text-primary-p">Personnel ID: <a className="active_link" href="#!">{id}</a></p>
                        <span className="font-bold text-title"><i className="fa fa-ellipsis-h"></i></span>
                      </div>
                      <img width="145" className="avatar_card" src={thumbnail} alt="avatarcard" />
                      <div className="bio">
                        <p className="name lebel">Name</p>
                        <p>{firstName} {lastName}</p>
                        <p className="telphone lebel">Telephone</p>
                        <p>{telepon}</p>
                        <p className="birthday lebel">Birthday</p>
                        <p>{birthday}</p>
                        <p className="email lebel">Email</p>
                        <p>{email}</p>
                      </div>
                    </div>
                  );
                }) : null
              }
            </div>
          </div>
          </main>
        );

    }
  }

export default Main;
