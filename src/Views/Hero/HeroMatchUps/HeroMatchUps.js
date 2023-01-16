import React from 'react';
import s from "../hero.module.css";
import getWinRate from "../../../lib/common/getWinRate";
import HeroIcon from "../../../Components/HeroIcon/HeroIcon";
import {setMatchUps} from "../../../redux/actions/actions";
import commonSort from "../../../lib/common/commonSort";
import {useDispatch} from "react-redux";

const HeroMatchUps = ({matchUps}) => {
    const dispatch=useDispatch()
    return (
          <table className={s.matchUps}>
                <thead>
                <th>Hero:</th>
                <th onClick={()=>dispatch(setMatchUps(commonSort(matchUps, 'games_played')))}>Games:</th>
                <th onClick={()=>dispatch(setMatchUps(commonSort(matchUps, 'wins')))}>Win Rate:</th>
                </thead>
                <tbody>
                {matchUps.map((hero) => {
                    return (
                        <tr key={hero.hero_id} >
                            <td className={s.hero_td}>
                                <HeroIcon id={hero.hero_id}/>
                            </td>
                            <td>{hero.games_played}</td>
                            <td>{getWinRate(hero.wins,hero.games_played)}%</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    );
};

export default HeroMatchUps;
