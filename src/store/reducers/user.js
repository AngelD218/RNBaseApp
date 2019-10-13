import { LOG_IN, LOG_OUT } from '../actions/actionTypes';

const userState = {
    user: null,
    isLoggedIn: false,
}

const reducer = (state = userState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                user: action.user,
                pass: action.pass,
                isLoggedIn: true
            };
        case LOG_OUT:
            return {
                ...state,
                user: null,
                isLoggedIn: false
            };
        default:
            return state;
    }
}

export default reducer;