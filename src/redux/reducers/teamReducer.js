import {SET_TEAM, SET_TEAM_HEROES, SET_TEAM_MATCHES, SET_TEAM_PLAYERS, SET_TEAMS} from "../types/types";

const initState={
    team:null,
    matches:null,
    players:null,
    heroes:null
}

export const teamReducer=(state=initState, action)=> {
    switch (action.type) {
        case SET_TEAM:
            return {...state, team: {...action.payload}}
        case SET_TEAM_MATCHES:
            return {...state, matches: {...action.payload}}
        case SET_TEAM_PLAYERS:
            return {...state, players: {...action.payload}}
        case SET_TEAM_HEROES:
            return {...state, heroes: {...action.payload}}
        default:
            return state;
    }
}
