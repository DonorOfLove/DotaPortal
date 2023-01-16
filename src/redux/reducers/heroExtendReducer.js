import {
    SET_DURATIONS,
    SET_HERO_PLAYERS, SET_ITEM_POPULARITY,
    SET_MATCHES,
    SET_MATCHUPS
} from "../types/types";

const initState = {
    matches: null,
    matchUps: null,
    durations: null,
    players: null,
    itemPopularity: null,
}

export const heroExtendReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_MATCHES:
            return {...state, matches: {...action.payload}}
        case SET_MATCHUPS:
            return {...state, matchUps: {...action.payload}}
        case SET_DURATIONS:
            return {...state, durations: {...action.payload}}
        case SET_HERO_PLAYERS:
            return {...state, players: {...action.payload}}
        case SET_ITEM_POPULARITY:
            return {...state, itemPopularity: {...action.payload}}
        default:
            return state;
    }
}
