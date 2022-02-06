import { autheticationTypes } from "./authenticationTypes"

const INITAIL_STATE = {
    name: ''
}

const authenticationReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case autheticationTypes.SET_CURRENT_USER:
            return {
                ...state,
            };
        default:
            return state
    }
}
export default authenticationReducer