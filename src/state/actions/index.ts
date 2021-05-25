import { ActionTypes } from "../action-types";
import { Phonebook } from "../../Phonebook";

export interface AddContact {
  type: ActionTypes.ADD_CONTACT;
  payload: Phonebook;
}

export interface DeleteContact {
  type: ActionTypes.DELETE_CONTACT;
  id: string;
}

export interface UpdateContact {
  type: ActionTypes.UPDATE_CONTACT;
  payload: Phonebook;
}

export type Action = AddContact | DeleteContact | UpdateContact;
