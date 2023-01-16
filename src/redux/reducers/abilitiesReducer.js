import {SET_ABILITIES, SET_ABILITIES_IDS, SET_ITEMS} from "../types/types";

const initState = {
    abilities: null,
    ids: null
}

export const abilitiesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_ABILITIES:
            return {...state, abilities: {...action.payload}}
        case SET_ABILITIES_IDS:
            return {...state, ids: {...action.payload}}
        default:
            return state;
    }
}
