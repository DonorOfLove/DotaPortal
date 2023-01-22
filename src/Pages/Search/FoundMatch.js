import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import teamsSort from "../../lib/Helpers/common/teamsSort";
import HeroIcon from "../../Components/HeroIcon/HeroIcon";
import s from "./search.module.css"

const FoundMatch = ({match}) => {

    const [teams, setTeams] = useState()

    useEffect(() => {
        setTeams(teamsSort(match.players))
    }, [])

    return (
        <Link to={`/matches/${match.match_id}`}>
            {teams ? (<table className={s.match}>
                <thead>
                <th>ID</th>
                <th>Duration</th>
                <th>Radiant</th>
                <th>Dire</th>
                </thead>
                <tbody>
                <td>{match.match_id}</td>
                <td>{new Date(match.duration * 1000).toISOString().slice(14, 19)}</td>
                <td>{teams.radiant.map((player) => {
                    return <HeroIcon id={player.hero_id}/>
                })}
                </td>
                <td>
                    {teams.dire.map((player) => {
                        return <HeroIcon id={player.hero_id}/>
                    })}
                </td>
                </tbody>
            </table>) : null }
        </Link>
    );
};

export default FoundMatch;
