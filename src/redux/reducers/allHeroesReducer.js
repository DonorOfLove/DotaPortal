import {SET_ALL_HEROES, SORT_PRO_BY_WINRATE} from "../types/types";
import getWinRate from "../../lib/Helpers/common/getWinRate";

const initState = {}

export const allHeroesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_ALL_HEROES:
            return action.payload
        case SORT_PRO_BY_WINRATE: {
            return state.sort((a, b) => getWinRate(b.pro_win, b.pro_pick) < getWinRate(a.pro_win, a.pro_pick) ? 1 : -1)
        }
        default:
            return state;
    }
}
