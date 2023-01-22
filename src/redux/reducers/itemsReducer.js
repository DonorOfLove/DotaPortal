import {SET_ITEMS} from "../types/types";

const initState = {}

export const itemsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return action.payload
        default:
            return state;
    }
}
