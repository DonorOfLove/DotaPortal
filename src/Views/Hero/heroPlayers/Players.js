import React from 'react';
import s from "../hero.module.css";
import {Link} from "react-router-dom";
import getWinRate from "../../../lib/common/getWinRate";
import {setHeroPlayers} from "../../../redux/actions/actions";
import sortHeroes from "../../../lib/common/commonSort";
import {useDispatch} from "react-redux";

const Players = ({players}) => {
const dispatch=useDispatch()
    console.log(players)
    return (
           <table className={s.players}>
                <thead>
                <th>Player:</th>
                <th onClick={()=>dispatch(setHeroPlayers(sortHeroes(players, 'games_played')))}>Games:</th>
                <th onClick={()=>dispatch(setHeroPlayers(sortHeroes(players, 'wins')))}>Win Rate:</th>
                </thead>
                <tbody>
                {players.map((player) => {
                    return (
                        <tr key={player.account_id}>
                            <td>
                                <Link to={`/player/${player.account_id}/overview`}>
                                    {player.account_id}
                                </Link>
                            </td>
                            <td>{player.games_played}</td>
                            <td>{getWinRate(player.wins,player.games_played)}%</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    );
};

export default Players;
