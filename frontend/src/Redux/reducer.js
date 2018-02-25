import {combineReducers} from 'redux';
import {user} from '../User';
import {homepage} from '../Homepage';

export default combineReducers({
    user,
    homepage,
});