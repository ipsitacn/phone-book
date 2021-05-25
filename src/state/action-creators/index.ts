import { ActionTypes } from "../action-types";
import { Action, AddContact, DeleteContact, UpdateContact } from "../actions";
import { Phonebook } from "../../Phonebook";

export const addContactAction = (content: Phonebook): AddContact => {
  return {
    type: ActionTypes.ADD_CONTACT,
    payload: content,
  };
};

export const updateContactAction = (content: Phonebook): UpdateContact => {
  return {
    type: ActionTypes.UPDATE_CONTACT,
    payload: content,
  };
};

export const deleteContactAction = (id: string): DeleteContact => {
  return {
    type: ActionTypes.DELETE_CONTACT,
    id,
  };
};
