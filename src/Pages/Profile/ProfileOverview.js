import React from 'react';
import ProfileRecentMatches from "./ProfileMatches";
import s from "./profile.module.css";
import ProfilePeers from "./ProfilePeers";
import ProfileHeroes from "./ProfileHeroes";

const ProfileOverview = ({player}) => {
    return (
        <div className={s.wrap}>
            <div className={s.matches_wrap}>
                <h1>Recent matches:</h1>
                <ProfileRecentMatches matches={player.recentMatches}/>
            </div>
            <div className={s.peers_n_heroes}>
                <h1>Peers:</h1>
                <ProfilePeers peers={player.peers.slice(0, 8)}/>
                <h1 className={s.heroes_header}>Most Heroes:</h1>
                <ProfileHeroes heroes={player.playedHeroes.slice(0, 9)}/>
            </div>
        </div>
    );
};

export default ProfileOverview;
