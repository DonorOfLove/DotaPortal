import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Skeleton from "../../UI/Skeleton/Skeleton";
import getTeams from "../../requests/teamsRequests/getTeams";
import {setTeams} from "../../redux/actions/actions";
import s from "./teamsList.module.css"
import getUnixTime from "../../lib/Helpers/common/getUnixTime";
import moment from "moment";
import {Link} from "react-router-dom";

const TeamList = () => {

    const dispatch = useDispatch()
    const teams = useSelector(state => state.teams)

    useEffect(() => {
        if (teams.length) {
        } else {
            getTeams()
                .then(response => dispatch(setTeams(response)))
        }
    }, [])

    return (
        <div className={s.main}>
            {teams ? (
                <table className={s.table}>
                    <thead>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>Rating</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    </thead>
                    <tbody>
                    {teams.map((team, index) => {
                        return <tr className={s.team}>
                            <td>{index + 1}st</td>
                            <td className={s.team_info}>
                                <img className={s.logo} src={team.logo_url} alt=""/>
                                <div className={s.name_N_last_match}>
                                    <div className={s.name}>
                                        {team.name ? (<Link className={s.link}
                                                            to={`/teams/${team.team_id}/overview`}>{team.name}</Link>) : (
                                            <span className={s.no_name}>noName</span>)}
                                    </div>
                                    <div className={s.last_match}>
                                        {moment(getUnixTime(team.last_match_time)).fromNow()}
                                    </div>
                                </div>
                            </td>
                            <td>{team.rating}</td>
                            <td>{team.wins}</td>
                            <td>{team.losses}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            ) : <Skeleton/>}
        </div>
    );
};

export default React.memo(TeamList);
