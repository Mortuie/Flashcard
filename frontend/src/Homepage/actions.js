import {
    POPULATE_STACKS,
    REMOVE_STACKS,
} from './constants';

export function populateStacks(stacks) {
    return {
        type: POPULATE_STACKS,
        stacks,
    };
}

export function removeStacks() {
    return {
        type: REMOVE_STACKS,
    };
}