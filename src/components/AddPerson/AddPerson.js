import React, { Component } from "react";
import "./AddPerson.css";

class AddPerson extends Component {
  state = {
    name: "",
    age: ""
  };

  nameChnagedHandler = event => {
    this.setState({ name: event.target.value });
  };
  ageChnagedHandler = event => {
    this.setState({ age: event.target.value });
  };
  personAddedHandler = () => {
    this.props.personAdded(this.state.name, this.state.age);
    this.setState({ name: "", age: "" });
  }

  render() {
    return (
      <div className="AddPerson">
        <input
          type="text"
          placeholder="Name"
          onChange={this.nameChnagedHandler}
          value={this.state.name}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={this.ageChnagedHandler}
          value={this.state.age}
        />
        <button onClick={() => this.personAddedHandler()}>Add Person</button>
      </div>
    );
  }
}

export default AddPerson;
