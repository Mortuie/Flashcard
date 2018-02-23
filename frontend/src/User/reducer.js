import {LOGIN, LOGOUT} from './actions';

const initialState = {
    token: null,
    username: null,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, token: action.token, username: action.username};
        case LOGOUT:
            return {...state, token: null, username: null};
        default:
            return state;
    }
}