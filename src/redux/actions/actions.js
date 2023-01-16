import {
    CLEAR_STATE,
    SET_ABILITIES,
    SET_ABILITIES_IDS,
    SET_ABILITIES_N_TALENTS,
    SET_ALL_HEROES, SET_ALL_MATCHES,
    SET_DURATIONS,
    SET_HERO_PLAYERS,
    SET_ITEM_POPULARITY,
    SET_ITEMS,
    SET_ITEMS_IDS,
    SET_MATCH,
    SET_MATCHES,
    SET_MATCHUPS,
    SET_PATCHNOTES,
    SET_PEERS,
    SET_PLAYED_HEROES,
    SET_PLAYER,
    SET_PLAYERS,
    SET_RECENT_MATCHES,
    SET_TEAM, SET_TEAM_HEROES,
    SET_TEAM_MATCHES,
    SET_TEAM_PLAYERS,
    SET_TEAMS,
    SET_WL,
    SORT_PRO_BY_WINRATE
} from "../types/types";

export const setPlayers = (payload) => ({type: SET_PLAYERS, payload})
export const Clear = () => ({type: CLEAR_STATE})
export const setMatch = (payload) => ({type: SET_MATCH, payload})

export const setPlayer = (payload) => ({type: SET_PLAYER, payload})
export const setPlayedHeroes = (payload) => ({type: SET_PLAYED_HEROES, payload})
export const setWl = (payload) => ({type: SET_WL, payload})
export const setRecentMatches = (payload) => ({type: SET_RECENT_MATCHES, payload})
export const setAllMatches = (payload)=>({type:SET_ALL_MATCHES,payload})
export const setPeers = (payload) => ({type: SET_PEERS, payload})

export const setAllHeroes = (payload) => ({type: SET_ALL_HEROES, payload})
export const setItems = (payload) => ({type: SET_ITEMS, payload})
export const setItemsIds = (payload) => ({type: SET_ITEMS_IDS, payload})

export const setPatchNotes = (payload) => ({type: SET_PATCHNOTES, payload})

export const setAbilities = (payload) => ({type: SET_ABILITIES, payload})
export const setAbilitiesIds = (payload) => ({type: SET_ABILITIES_IDS, payload})
export const setAbilitiesNTalents = (payload) => ({type: SET_ABILITIES_N_TALENTS, payload})

export const setMatches = (payload) => ({type: SET_MATCHES, payload})
export const setMatchUps = (payload) => ({type: SET_MATCHUPS, payload})
export const setDurations = (payload) => ({type: SET_DURATIONS, payload})
export const setHeroPlayers = (payload) => ({type: SET_HERO_PLAYERS, payload})
export const setItemPopularity = (payload) => ({type: SET_ITEM_POPULARITY, payload})

export const setTeams = (payload) => ({type: SET_TEAMS, payload})

export const setTeam = (payload) => ({type: SET_TEAM, payload})
export const setTeamMatches = (payload) => ({type: SET_TEAM_MATCHES, payload})
export const setTeamPlayers = (payload) => ({type: SET_TEAM_PLAYERS, payload})
export const setTeamHeroes = (payload) => ({type: SET_TEAM_HEROES, payload})


