import React from 'react';
import HeroIcon from "../../Components/HeroIcon/HeroIcon";
import {useDispatch} from "react-redux";
import getWinRate from "../../lib/Helpers/common/getWinRate";
import sortHeroes from "../../lib/Helpers/common/commonSort";
import {setPlayedHeroes} from "../../redux/actions/actions";
import s from './profile.module.css'

const ProfileHeroes = ({heroes}) => {

    const dispatch = useDispatch()

    return (<>
            {heroes ? (<table className={s.played_heroes}>
                <thead>
                <th>Hero:</th>
                <th onClick={() => dispatch(setPlayedHeroes(sortHeroes(heroes, 'games')))}>Matches:</th>
                <th onClick={() => dispatch(setPlayedHeroes(sortHeroes(heroes, 'win')))}>WR:</th>
                </thead>
                <tbody>
                {heroes.map((hero) => {
                    return (
                        <tr key={hero.hero_id}>
                            <td className={s.hero}><HeroIcon id={hero.hero_id}/></td>
                            <td>{hero.games}</td>
                            <td>{getWinRate(hero.win, hero.games)}%</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>) : null }
        </>

    );
};

export default ProfileHeroes;
