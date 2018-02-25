import {
    POPULATE_STACKS,
    REMOVE_STACKS,
} from './constants.js';

const initialState = {
    stacks: [],
};

export default function homepageReducer(state = initialState, action) {
    switch (action.type) {
    case POPULATE_STACKS:
        return {...state, stacks: action.stacks};
    case REMOVE_STACKS:
        return {...state, stacks: []};
    default:
        return state;
    }
}