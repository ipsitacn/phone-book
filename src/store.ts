import reducer from "./state/reducers/contactReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(reducer, [], applyMiddleware(thunk));
