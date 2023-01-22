import React from 'react';
import {Link} from "react-router-dom";
import isWin from "../../../lib/Helpers/match/isWin";
import secondS from '../hero.module.css'
import moment from "moment";
import getUnixTime from "../../../lib/Helpers/common/getUnixTime";
import matchesTable from "../../../Styles/matchesTable.module.css";

const Rankings = ({matches}) => {
    return (
        <table className={secondS.rankings}>
            <thead>
            <th>League:</th>
            <th>Duration:</th>
            <th>K/D/A</th>
            <th>Team:</th>
            <th>Played:</th>
            </thead>
            <tbody>
            {matches.map((match) => {
                return (
                    <Link key={match.match_id}
                          className={matchesTable.match + " " + (isWin(match) ? matchesTable.win : matchesTable.lose)}
                          to={`/matches/${match.match_id}`}>
                        <td>
                            {match.league_name}
                        </td>
                        <td>
                            {`${Math.floor(match.duration / 60)}:${match.duration % 60}`}
                        </td>
                        <td>
                            {match.kills}/{match.deaths}/{match.assists}
                        </td>
                        <td>
                            {match.player_slot < 4 ? (
                                'Radiant') : (
                                'Dire')}
                        </td>
                        <td>{moment(getUnixTime(match.start_time)).fromNow()}</td>
                    </Link>
                )
            })}
            </tbody>
        </table>
    );
};

export default Rankings;
