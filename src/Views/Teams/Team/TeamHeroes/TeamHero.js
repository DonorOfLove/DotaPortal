import React from 'react';
import HeroIcon from "../../../../Components/HeroIcon/HeroIcon";
import getWinRate from "../../../../lib/common/getWinRate";
import s from '../team.module.css'

const TeamHero = ({hero}) => {
    return (
       <tr>
           <td className={s.hero_td}> <HeroIcon id={hero.hero_id}/><p>{hero.localized_name}</p></td>
           <td>{hero.games_played}</td>
           <td>{getWinRate(hero.wins,hero.games_played)}%</td>
       </tr>
    );
};

export default TeamHero;
