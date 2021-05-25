import { Action } from "../actions";
import { ActionTypes } from "../action-types";
import { Phonebook } from "../../Phonebook";

const reducer = (state = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_CONTACT:
      const content = action.payload;
      return [...state, Object.assign({}, content)];
    case ActionTypes.DELETE_CONTACT:
      return state.filter((list: Phonebook) => list.id !== action.id);
    case ActionTypes.UPDATE_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
