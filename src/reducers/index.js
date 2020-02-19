import { combineReducers } from "redux";
import authors from "./authors";
import blogs from "./blogs";

// jangan lupa masukin ke store.js
export default combineReducers({ authors, blogs });
