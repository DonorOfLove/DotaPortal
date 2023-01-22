import {combineReducers} from "redux";
import {searchReducer} from "./searchReducer";
import {allHeroesReducer} from "./allHeroesReducer";
import {itemsReducer} from "./itemsReducer";
import {itemsIdsReducer} from "./itemsIdsReducer";
import {patchNotesReducer} from "./patchNotesReducer";
import {playerReducer} from "./playerReducer";
import {abilitiesReducer} from "./abilitiesReducer";
import {heroExtendReducer} from "./heroExtendReducer";
import {AbilitiesAndTalentsReducer} from "./AbilitiesAndTalentsReducer";
import {teamsReducer} from "./teamsReducer";
import {teamReducer} from "./teamReducer";

export const rootReducer = combineReducers({
    search: searchReducer,
    heroes: allHeroesReducer,
    heroExtend: heroExtendReducer,
    items: itemsReducer,
    itemsIds: itemsIdsReducer,
    patchNotes: patchNotesReducer,
    player: playerReducer,
    abilities: abilitiesReducer,
    abilitiesAndTalents: AbilitiesAndTalentsReducer,
    teams: teamsReducer,
    team: teamReducer
})
