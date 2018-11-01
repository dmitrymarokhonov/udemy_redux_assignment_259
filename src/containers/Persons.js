import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionsTypes from "../state/actions";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdd} />
        {this.props.prs.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prs: state.prs.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAdd: () => dispatch({ type: actionsTypes.ADDPERSON, name: "Dima" }),
    onPersonDelete: id => dispatch({ type: actionsTypes.DELETEPERSON, personId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
