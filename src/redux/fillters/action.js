import { COLOR, STATAUS } from "./actionTypes"


export const statausChange = (stataus) => {
    return {
        type: STATAUS,
        payload: stataus
    }
}
export const colorChange = (colorValue, changeType) => {
    return {
        type: COLOR,
        payload: {
            colorValue,
            changeType
        }
    }
}