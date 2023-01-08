import { ADDED, COMPLETE_ALL, CLEAR_COMPLETE, TOGGLED, COLOR_CHANGE, DELETED } from "./actionTypes";
import inistialState from "./inistialSate";

const newId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1
}

const reducer = (state = inistialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: newId(state),
                    text: action.payload,
                    isComplete: false,
                    // color: 'green'
                }
            ];

        case COMPLETE_ALL:
            return state.map(todo => {
                return {
                    ...todo,
                    isComplete: true
                };
            })


        case CLEAR_COMPLETE:
            return state.filter(todo => !todo.isComplete);

        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                };
                return {
                    ...todo,
                    isComplete: !todo.isComplete
                };
            });

        case COLOR_CHANGE:
            const { todoId, color } = action.payload;
            return state.map(todo => {
                if (todo.id !== todoId) {
                    return todo;
                } else
                    return {
                        ...todo,
                        color: color
                    }
            });

        case DELETED:
            return state.filter(todo =>
                todo.id !== action.payload
            )

        default:
            return state;
    }
};
export default reducer;