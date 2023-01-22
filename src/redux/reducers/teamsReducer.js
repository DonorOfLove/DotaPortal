import {SET_TEAMS} from "../types/types";

const initState = []

export const teamsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_TEAMS:
            return action.payload
        default:
            return state;
    }
}
