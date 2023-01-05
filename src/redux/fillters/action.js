import { COLOR, STATAUS } from "./actionTypes"


export const stataus = (stataus) => {
    return {
        type: STATAUS,
        payload: stataus
    }
}
export const color = (color, changeType) => {
    return {
        type: COLOR,
        payload: {
            color,
            changeType
        }
    }
}