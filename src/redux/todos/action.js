import {
    ADDED,
    CLEAR_COMPLETE,
    COLOR_CHANGE,
    COMPLETE_ALL,
    DELETED,
    TOGGLED,
} from './actionTypes'

export const added = (value) => {
    return {
        type: ADDED,
        payload: value,
    }
}
export const completeAll = () => {
    return {
        type: COMPLETE_ALL,
    }
}
export const clearCompleted = (value) => {
    return {
        type: CLEAR_COMPLETE,
        payload: value,
    }
}
export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId,
    }
}
export const colorChange = (todoId, color) => {
    return {
        type: COLOR_CHANGE,
        payload: {
            todoId,
            color,
        },
    }
}
export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId,
    }
}
