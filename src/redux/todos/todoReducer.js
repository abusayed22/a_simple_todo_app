import { ADDED, COMPLETE_ALL, CLEAR_COMPLETE, TOGGLED, COLOR_CHANGE, DELETED } from "./actionTypes";
import inistialState from "./inistialSate";

const newId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1
}

const todoReducer = (state = inistialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: newId(state),
                    text: action.payload,
                    isComplete: false,
                    color: 'green'
                }
            ];

        case COMPLETE_ALL:
            return [
                ...state,
                state.map(todo => {
                    todo.isComplete = true
                })
            ];

        case CLEAR_COMPLETE :
            return state.map(todo => todo.isComplete !== true );

        case TOGGLED:
            return state.map(todo => {
                if(todo.id !== action.payload) {
                    return todo;
                };
                return {
                    ...todo,
                    // eslint-disable-next-line no-undef
                    isComplete : !isComplete
                };
            });

        case COLOR_CHANGE: 
        const {todoId, colorValue} = action.payload;
        return state.map(todo => {
            if(todo.id !== todoId) {
                return todo;
            }
            return {
                ...state,
                color: colorValue
            }
        });

        case DELETED: 
        return state.filter(todo => {
          return todo.id !== action.payload
        })

        default:
            return state;
    }
};
export default todoReducer;