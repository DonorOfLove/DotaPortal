import {SET_PATCHNOTES} from "../types/types";

const initState = {}

export const patchNotesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PATCHNOTES:
            return action.payload
        default:
            return state;
    }
}
