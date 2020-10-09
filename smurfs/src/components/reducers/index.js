import { FETCH_DATA, FETCH_SUCCESS, ADD_SMURFS } from "../actions";

const initialState = {
  smurf: {
    name: "",
    age: "",
    height: "",
  },
  smurfs: [],
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        smurfs: action.payload,
      };
    case ADD_SMURFS:
      return {
        ...state,
        smurfs: state.smurfs,
      };
    default:
      return state;
  }
};
