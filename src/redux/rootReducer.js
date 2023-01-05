import { combineReducers } from "redux";
import todosReducer from '.'
import filterReducer from "./fillters/filterReducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filterReducer
});

export default rootReducer;