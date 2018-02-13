import {LOGIN, LOGOUT} from './actions';

export default function userReducer(state = {token: null}, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, token: action.token};
        case LOGOUT:
            return {...state, token: null};
        default:
            return state;
    }
}