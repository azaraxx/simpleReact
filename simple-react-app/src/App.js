import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();

    console.clear();
    this.state = {
      users: [
        {
          id: 1,
          name: "Lionel Messi",
          email: "test@test.com",
        },
        {
          id: 2,
          name: "Cristiano Ronaldo",
          email: "test@test.com",
        },
        {
          id: 3,
          name: "Kylian Mbappe",
          email: "test@test.com",
        },
      ],
    };

    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id) {
    console.log('test');
    let updatedUsers = this.state.users;

    updatedUsers = updatedUsers.filter(user => user.id !== id);

    //State Direct Immutable
    this.setState({
      users: updatedUsers
    });
  }

  render() {
    return (
      <div className="container">
        <h4>User App</h4>
        <hr />
        <AddUser />
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users} />
      </div>
    );
  }
}

export default App;
