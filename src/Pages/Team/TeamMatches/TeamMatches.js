import React from 'react';
import sTeam from "../team.module.css"
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
        </div>
    );
};

export default TeamMatches;
