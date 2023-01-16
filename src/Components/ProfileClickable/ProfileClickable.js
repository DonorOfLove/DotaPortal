import React from 'react';
import s from './profileClickable.module.css'
import moment from "moment";
import {Link} from "react-router-dom";

const ProfileClickable = ({player, last_match_time}) => {
    return (
        <Link className={s.profile} to={`/player/${player.account_id}/overview`}>
            <img className={s.profile_avatar} src={player.avatarfull}/>
            <div className={s.name__time}>
                <p className={s.profile_name}>{player.personaname}</p>
                {last_match_time?(<p>{moment(player.last_match_time).fromNow()}</p>):(null)}
            </div>
        </Link>
    );
};

export default React.memo(ProfileClickable);
