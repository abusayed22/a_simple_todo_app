import { combineReducers } from "redux";
import todoReducer from "./todos/todoReducer";
import filterReducer from "./fillters/filterReducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
});

export default rootReducer;