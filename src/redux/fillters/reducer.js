import inistialState from "./inistialState";
import { COLOR, STATAUS } from "./actionTypes";




const reducer = (state = inistialState, action) => {
    switch (action.type) {
        case STATAUS:
            return {
                ...state,
                stataus : action.payload
            }

        case COLOR:
            const {color, changeType} = action.type;

               switch (changeType) {
                case 'add':
                    return {
                        ...state.color,
                         color: [
                            ...state.color,
                             color
                         ]
                    }

                case 'remove':
                    return {
                        ...state,
                        color: state.color.filter(existingColor => existingColor !== color)
                    }

                default:
                    return state
               }


        default:
            return state
    }
}
export default reducer;