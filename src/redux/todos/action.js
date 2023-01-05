import { ADDED, CLEAR_COMPLETE, COLOR_CHANGE, COMPLETE_ALL, DELETED, TOGGLED } from "./actionTypes"

export const added = (value) => {
    return {
        type: ADDED,
        payload: value
    }
}
export const completeAll = (todoText) => {
    return {
        type: COMPLETE_ALL,
        payload: todoText
    }
}
export const clearCompleted = (value) => {
    return {
        type: CLEAR_COMPLETE,
        payload: value
    }
}
export const toggled = (todoId,value) => {
    return {
        type: TOGGLED,
        payload: {
            todoId,
            value
        }
    }
}
export const colorChange = (todoId,value) => {
    return {
        type: COLOR_CHANGE,
        payload: {
            todoId,
            value
        }
    }
}
export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: {
            todoId,
        }
    }
}