import React from 'react';
import HeroIcon from "../../Components/HeroIcon/HeroIcon";
import getWinRate from "../../lib/common/getWinRate";
import {useDispatch} from "react-redux";
import s from './Heroes.module.css'

const CurHero = ({hero, t, p, queue}) => {
    return (
        <tr className={s.hero}>
            <td className={s.name}><HeroIcon id={hero.id}/>{hero.localized_name}</td>
            {
                queue === 'pro' ? (<>
                    <td>{hero.pro_pick}</td>
                    <td> {getWinRate(hero.pro_ban, p)}%</td>
                    <td> {hero.pro_win} <span className={s.wr}>
                        ({getWinRate(hero.pro_win, hero.pro_pick)}%)
                    </span></td>
                </>) : (<>
                    <td>{hero.turbo_picks}</td>
                    <td>{hero.turbo_wins} <span className={s.wr}>({getWinRate(hero.turbo_wins, hero.turbo_picks)}%)</span></td>
                </>)
            }

        </tr>
    );
};

export default React.memo(CurHero);
