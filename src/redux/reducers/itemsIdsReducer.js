import {SET_ALL_HEROES, SET_ITEMS_IDS} from "../types/types";

const initState = {}

export const itemsIdsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_ITEMS_IDS:
            return action.payload
        default:
            return state;
    }
}
