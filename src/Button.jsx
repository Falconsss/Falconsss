import React from "react";
import UserList from "./UserList";
import Preloader from "./Preloader";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  updateUsers() {
    let preloader = document.getElementById("preloader");

    preloader.classList.toggle("non-visible");
    preloader.classList.toggle("visible");

    let users = this.props.onClick();

    users.then(response => {
      preloader.classList.toggle("visible");
      preloader.classList.toggle("non-visible");

      this.setState(() => {
        return { users: response };
      });
    });
  }

  render() {
    return (
      <div id="list">
        <button id="button" onClick={() => this.updateUsers()}>
          {this.props.label}
        </button>
        <Preloader />
        <UserList users={this.state.users} />
      </div>
    );
  }
}
