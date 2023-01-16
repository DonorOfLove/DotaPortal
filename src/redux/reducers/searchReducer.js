import {CLEAR_STATE, SET_MATCH, SET_PLAYERS} from "../types/types";

const initState={
    players:[],
    match:{}
}

export const searchReducer=(state=initState, action)=> {
    switch (action.type) {
        case SET_PLAYERS:
            return {...state, players:action.payload}
        case SET_MATCH:
            return {...state, match:action.payload}
        case CLEAR_STATE:
            return initState
        default:
            return state;
    }
}
