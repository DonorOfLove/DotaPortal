import React, {useEffect} from 'react';
import s from './profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Route, Routes, useParams} from "react-router-dom";
import {
    Clear, setAllMatches,
    setPeers,
    setPlayedHeroes,
    setPlayer,
    setRecentMatches,
    setWl
} from "../../redux/actions/actions";
import getPlayer from "../../requests/profileRequests/getPlayer";
import getPlayedHeroes from "../../requests/profileRequests/getPlayedHeroes";
import getWl from "../../requests/profileRequests/getWl";
import getRecentMatches from "../../requests/profileRequests/getRecentMatches";
import getPeers from "../../requests/profileRequests/gerPeers";
import Skeleton from "../../UI/Skeleton/Skeleton";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileMatches from "./ProfileMatches";
import ProfilePeers from "./ProfilePeers";
import ProfileHeroes from "./ProfileHeroes";
import ProfileActivity from "./ProfileActivity";
import ProfileOverview from "./ProfileOverview";
import tabs from '../../Styles/tabs.module.css'
import getAllMatches from "../../requests/profileRequests/getAllMatches";

const Profile = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)

    useEffect(() => {
        dispatch(Clear)
        getPlayer(params.id)
            .then(responce => dispatch(setPlayer(responce)))
            .then(getWl(params.id)
                .then(response => dispatch(setWl(response))))
            .then(getRecentMatches(params.id)
                .then(response => dispatch(setRecentMatches(response))))
            .then(getPlayedHeroes(params.id)
                .then(response => dispatch(setPlayedHeroes(response))))
            .then(getPeers(params.id)
                .then(response => dispatch(setPeers(response))))
        getAllMatches(params.id)
            .then(response => dispatch(setAllMatches(response)))

    }, [params.id])

    return (
        <div className={s.profile}>
            {player.profile && player.wl && player.recentMatches && player.playedHeroes && player.peers && player.allMatches ? (
                <>
                    <ProfileHeader player={player}/>
                    <div className={tabs.tabs}>
                        <NavLink className={({isActive}) => (tabs.nav_link + " " + (isActive ? tabs.selected : ''))}
                                 to={`overview`}>OVERVIEW</NavLink>
                        <NavLink className={({isActive}) => (tabs.nav_link + " " + (isActive ? tabs.selected : ''))}
                                 to={'matches'}>MATCHES</NavLink>
                        <NavLink className={({isActive}) => (tabs.nav_link + " " + (isActive ? tabs.selected : ''))}
                                 to={'peers'}>PEERS</NavLink>
                        <NavLink className={({isActive}) => tabs.nav_link + " " + (isActive ? tabs.selected : '')}
                                 to={'heroes'}>HEROES</NavLink>
                        <NavLink className={({isActive}) => tabs.nav_link + " " + (isActive ? tabs.selected : '')}
                                 to={'activity'}>ACTIVITY</NavLink>
                    </div>
                    <Routes>
                        <Route path='overview' element={<ProfileOverview player={player}/>}/>
                        <Route path="matches" element={<ProfileMatches matches={player.allMatches.reverse()}/>}/>
                        <Route path='peers' element={<ProfilePeers peers={player.peers}/>}/>
                        <Route path='heroes' element={<ProfileHeroes heroes={player.playedHeroes}/>}/>
                        <Route path='activity' element={<ProfileActivity matches={player.allMatches.reverse()}/>}/>
                    </Routes>
                </>
            ) : <Skeleton/>}
        </div>
    );
};

export default Profile;
