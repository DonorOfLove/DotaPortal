import {SET_ABILITIES_N_TALENTS} from "../types/types";

const initState = null

export const AbilitiesAndTalentsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_ABILITIES_N_TALENTS:
            return action.payload
        default:
            return state;
    }
}
