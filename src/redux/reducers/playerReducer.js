import {CLEAR_STATE, SET_PEERS, SET_PLAYED_HEROES, SET_PLAYER, SET_RECENT_MATCHES, SET_ALL_MATCHES, SET_WL} from "../types/types";

const initState = {
    profile: undefined,
    wl: undefined,
    recentMatches:undefined,
    allMatches:undefined,
    playedHeroes: undefined,
    peers: undefined,
}

export const playerReducer = (state = initState, action) => {
    switch (action.type) {
        case CLEAR_STATE:
            return initState
        case SET_PLAYER:
            return {...state, profile: {...action.payload}}
        case SET_WL:
            return {...state, wl:action.payload}
        case SET_RECENT_MATCHES:
            return {...state, recentMatches:action.payload}
        case SET_ALL_MATCHES:
            return {...state, allMatches:action.payload}
        case SET_PLAYED_HEROES:
            return {...state, playedHeroes:action.payload}
        case SET_PEERS:
            return {...state, peers:action.payload}
        default:
            return state;
    }
}
