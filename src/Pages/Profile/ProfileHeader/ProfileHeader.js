import React from 'react';
import s from "../profile.module.css";
import dotaPlus from "../../../assets/imgs/icons/dota-plus.png";
import moment from "moment";
import getUnixTime from "../../../lib/Helpers/common/getUnixTime";
import Rank from "./Rank";
import Wl from "../../../Components/WL/Wl";

const ProfileHeader = ({player}) => {
    return (
        <table className={s.main}>
            <div className={s.avatar_n_info}>
                <img className={s.avatar} src={player.profile.profile.avatarfull} alt='#'/>
                {player.profile.profile.is_contributor ? (
                    <img className={s.dota_plus} src={dotaPlus} alt=""/>) : null}
                <div className={s.head_info}>
                    <h1 className={s.name}>{player.profile.profile.personaname}</h1>
                    <Wl wins={player.wl.win} losses={player.wl.lose}/>
                    <div className={s.wl}> {((player.wl.win / (player.wl.win + player.wl.lose)) * 100).toFixed(1)}%
                    </div>
                </div>
            </div>
            <div className={s.last_visit}>
                <div>last
                    visit: {player.profile.profile.last_login ? (moment(player.profile.profile.last_login).fromNow()) : ('long time ago')}</div>
                <div>last
                    match: {player.recentMatches[0] ? (moment(getUnixTime(player.recentMatches[0].start_time)).fromNow()) : ('long time ago')}</div>
            </div>
            <div>
                <Rank player={player}/>
            </div>
        </table>
    );
};

export default React.memo(ProfileHeader);
