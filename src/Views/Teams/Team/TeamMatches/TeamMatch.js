import React from 'react';
import matchesTable from "../../../../Styles/matchesTable.module.css";
import isWin from "../../../../lib/match/isWin";
import s from "../../teams.module.css";
import moment from "moment";
import getUnixTime from "../../../../lib/common/getUnixTime";
import {Link} from "react-router-dom";
import sTeam from "../team.module.css";

const TeamMatch = ({match}) => {
    return (
        <Link to={`/matches/${match.match_id}`}
              className={matchesTable.match + " " + (isWin(match) ? matchesTable.win : matchesTable.lose)}>
            <td>
                <span className={s.link}>{match.match_id}</span>
                <p>
                    {moment(getUnixTime(match.start_time)).fromNow()}
                    /{match.league_name}
                </p>
            </td>
            <td>{new Date(match.duration * 1000).toISOString().slice(14, 19)}</td>
            <td>
                <Link to={`/teams/${match.opposing_team_id}/overview`} className={sTeam.link}>
                    <img src={match.opposing_team_logo} className={s.logo} alt=""/>
                    <span className={sTeam.link}>{match.opposing_team_name}</span>
                </Link>
            </td>
        </Link>
    );
};

export default React.memo(TeamMatch);
