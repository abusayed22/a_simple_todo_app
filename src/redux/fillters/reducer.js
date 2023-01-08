import inistialState from "./inistialState";
import { COLOR, STATAUS } from "./actionTypes";




const reducer = (state = inistialState, action) => {
    switch (action.type) {
        case STATAUS:
            return {
                ...state,
                stataus: action.payload
            }

        case COLOR:
            const { colorValue, changeType } = action.payload;

            switch (changeType) {
                case "add":
                    return {
                        ...state,
                        color: [...state.color, colorValue]
                    };

                case 'remove':
                    return {
                        ...state,
                        color: state.color.filter(existingColor => existingColor !== colorValue)
                    }

                default:
                    return state
            }


        default:
            return state
    }
}
export default reducer;