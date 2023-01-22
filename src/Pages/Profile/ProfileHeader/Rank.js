import React from 'react';
import s from "../profile.module.css"
import {Tooltip} from "@mui/material";

const Rank = ({player}) => {
    return (
        <Tooltip title={player.profile.mmr_estimate.estimate}>
            <div className={s.rank}>
                {JSON.stringify(player.profile.rank_tier)[1] != 0 ? (
                    <img className={s.rank_stars} alt='#'
                         src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${JSON.stringify(player.profile.rank_tier)[1]}.png`}/>
                ) : null}
                <img className={s.rank_icon} alt='#'
                     src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${JSON.stringify(player.profile.rank_tier)[0]}.png`}/>
            </div>
        </Tooltip>
    );
};

export default React.memo(Rank);
