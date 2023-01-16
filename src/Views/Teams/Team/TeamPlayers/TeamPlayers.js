import React from 'react';
import sTeam from "../team.module.css";
import TeamPlayer from "./TeamPlayer";

const TeamPlayers = ({players}) => {
    return (
        <table className={sTeam.overview_players}>
            <thead>
            <th>Player:</th>
            <th>Games:</th>
            <th>Win Rate:</th>
            </thead>
            <tbody>
            {players.map((player) => {
                return <TeamPlayer player={player}/>
            })}
            </tbody>
        </table>
    );
};

export default TeamPlayers;
