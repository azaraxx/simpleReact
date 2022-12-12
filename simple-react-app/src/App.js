import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();

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
  }

  render() {
    return (
      <div className="container">
        <h4>User App</h4>
        <hr />
        <AddUser />
        <hr/>
        <Users />
      </div>
    );
  }
}

export default App;
