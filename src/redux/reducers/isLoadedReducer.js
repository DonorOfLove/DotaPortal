import {TOGGLE_HEROES, TOGGLE_MATCH, TOGGLE_PLAYERS} from "../types/types";

const initState={
    players:false,
    match:false,
    heroes:false,

}

export const isLoadedreducer=(state=initState, action)=> {
    switch (action.type) {
        case TOGGLE_PLAYERS:
            return {...state, players:!state.players}
        case TOGGLE_MATCH:
            return {...state, match:!state.match}
        case TOGGLE_HEROES:
            return {...state, heroes:!state.heroes}
        default:
            return state;
    }
}
