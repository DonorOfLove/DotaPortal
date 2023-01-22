import React from 'react';
import {Link} from "react-router-dom";
import matchesTable from "../Styles/matchesTable.module.css";
import isWin from "../lib/Helpers/match/isWin";
import s from "../Pages/Profile/profile.module.css";
import HeroIcon from "./HeroIcon/HeroIcon";
import lobbys from "../mock-data/mLobbys.json";
import moment from "moment";
import getUnixTime from "../lib/Helpers/common/getUnixTime";

const Match = ({match}) => {
    return (
        <Link key={match.match_id}
              className={matchesTable.match + " " + (isWin(match) ? matchesTable.win : matchesTable.lose)}
              to={`/matches/${match.match_id}`}>
            <td className={s.hero_td}>
                <HeroIcon id={match.hero_id}/>
            </td>
            <td>
                <span>
                    {lobbys[match.lobby_type]?.name ? (lobbys[match.lobby_type].name) : ('Event')}
                </span>
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
    );
};

export default Match;
