import { combineReducers } from "redux";
import todoList from "./todoList";
import todoMap from "./todoMap";


export default combineReducers({ todoList, todoMap });