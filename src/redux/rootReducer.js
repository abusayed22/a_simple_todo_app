import { combineReducers } from 'redux'
import todoReducer from './todos/reducer'
import filterReducer from './fillters/reducer'
const rootReducer = combineReducers({
    todos: todoReducer,
    fillters: filterReducer,
})

export default rootReducer
