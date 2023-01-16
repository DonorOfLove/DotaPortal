import React from 'react';
import isWin from "../../../../lib/match/isWin";
import s from "../../teams.module.css";
import moment from "moment";
import getUnixTime from "../../../../lib/common/getUnixTime";
import sTeam from "../team.module.css"
import matchesTable from "../../../../Styles/matchesTable.module.css"
import {Link} from "react-router-dom";
import TeamMatch from "./TeamMatch";

const TeamMatches = ({matches}) => {
    return (
        <div className={sTeam.matches}>
            <table>
                <thead>
                <th>ID:</th>
                <th>Duration:</th>
                <th>Opposing Team:</th>
                </thead>
                <tbody>
                {matches.map((match) => {
                    return <TeamMatch match={match}/>
                })}
                </tbody>
            </table>
            <div>
            </div>
        </div>
    );
};

export default TeamMatches;
