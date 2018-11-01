import * as actionTypes from "../actions";

const initialState = {
  persons: []
};

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDPERSON:
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(),
          age: Math.floor(Math.random() * 40),
          name: action.name
        })
      };
    case actionTypes.DELETEPERSON:
      const updatedPersons = state.persons.filter(
        person => person.id !== action.personId
      );
      return { ...state, persons: updatedPersons };
    default:
      return state;
  }
};

export default personsReducer;
