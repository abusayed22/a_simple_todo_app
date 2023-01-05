import inistialState from "../todos/inistialSate";
import { COLOR, STATAUS } from "./actionTypes";

const filterReducer = (state = inistialState, action) => {
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
                         color
                    }
                     
                case 'remove':
                    return {
                        ...state,
                        color: state.color.filter(existingColor => state.color !== color)
                    }
               
                default:
                    break;
               }
               return state;
            
    
        default:
            break;
    }
}
export default filterReducer;