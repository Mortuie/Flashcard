import {LOGIN, LOGOUT} from './actions';

export default function userReducer(state = false, action) {
    switch (action.type) {
        case LOGIN:
            return true;
        case LOGOUT:
            return false;
        default:
            return state;
    }
}