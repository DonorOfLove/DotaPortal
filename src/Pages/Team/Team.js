import React, {useEffect} from 'react';
import {useParams, NavLink, Route, Routes} from "react-router-dom";
import getTeamMatches from "../../requests/teamsRequests/getTeamMatches";
import {useDispatch, useSelector} from "react-redux";
import getTeams from "../../requests/teamsRequests/getTeams";
import {setTeam, setTeamHeroes, setTeamMatches, setTeamPlayers} from "../../redux/actions/actions";
import getTeamPlayers from "../../requests/teamsRequests/getTeamPlayers";
import getTeamHeroes from "../../requests/teamsRequests/getTeamHeroes";
import Skeleton from "../../UI/Skeleton/Skeleton"
import tabs from "../../Styles/tabs.module.css"
import sTeam from "./team.module.css";
import s from "../TeamList/teamsList.module.css";
import Wl from "../../Components/WL/Wl";
import TeamMatches from "./TeamMatches/TeamMatches";
import TeamPlayers from "./TeamPlayers/TeamPlayers";

import TeamOverview from "./TeamOverview";
import TeamHeroes from "./TeamHeroes/TeamHeroes";

const Team = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const team = useSelector(state => state.team)
    const id = params.id

    useEffect(() => {
        getTeams(id)
            .then(res => dispatch(setTeam(res)))
            .then(getTeamPlayers(id)
                .then(res => dispatch(setTeamPlayers(res))))
            .then(getTeamMatches(id)
                .then(res => dispatch(setTeamMatches(res))))
            .then(getTeamHeroes(id)
                .then(res => dispatch(setTeamHeroes(res))))
    }, [id])

    return (
        <div>
            {team.team && team.matches && team.players && team.heroes ? (
                <div className={sTeam.main}>
                    <div className={s.header}>
                        <img src={team.team.logo_url} alt="" className={sTeam.logo}/>
                        <div>
                            <h1>{team.team.name}</h1>
                            <Wl wins={team.team.wins} losses={team.team.losses}/>
                            <p className={sTeam.rating}>Rating:{team.team.rating}</p>
                        </div>
                    </div>
                    <div className={tabs.tabs}>
                        <NavLink className={({isActive}) => (tabs.nav_link + " " + (isActive ? tabs.selected : ''))}
                                 to={`overview`}>OVERVIEW</NavLink>
                        <NavLink className={({isActive}) => (tabs.nav_link + " " + (isActive ? tabs.selected : ''))}
                                 to={'matches'}>MATCHES</NavLink>
                        <NavLink className={({isActive}) => (tabs.nav_link + " " + (isActive ? tabs.selected : ''))}
                                 to={'heroes'}>HEROES</NavLink>
                        <NavLink className={({isActive}) => tabs.nav_link + " " + (isActive ? tabs.selected : '')}
                                 to={'players'}>PLAYERS</NavLink>
                    </div>
                    <Routes>
                        <Route path="matches" element={<TeamMatches matches={Object.values(team.matches)}/>}/>
                        <Route path='heroes' element={<TeamHeroes heroes={Object.values(team.heroes)}/>}/>
                        <Route path='players' element={<TeamPlayers players={Object.values(team.players)}/>}/>
                        <Route path='overview' element={<TeamOverview team={team}/>}/>
                    </Routes>
                </div>
            ) : <Skeleton/>}
        </div>
    );
};

export default React.memo(Team);
