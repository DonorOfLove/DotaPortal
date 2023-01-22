import React from 'react';
import TeamMatch from "./TeamMatches/TeamMatch";
import TeamPlayer from "./TeamPlayers/TeamPlayer";
import TeamHero from "./TeamHeroes/TeamHero";
import sTeam from "./team.module.css"

const TeamOverview = ({team}) => {
    return (
        <div className={sTeam.overview}>
            <div className={sTeam.wrap}>
                <h1>Matches:</h1>
                <table className={sTeam.overview_matches}>
                    <thead>
                    <th>ID:</th>
                    <th>Duration:</th>
                    <th>Opposing Team:</th>
                    </thead>
                    <tbody>
                    {Object.values(team.matches).slice(0, 11).map((match) => {
                        return <TeamMatch match={match}/>
                    })}
                    </tbody>
                </table>
            </div>

            <div className={sTeam.players_n_heroes}>
                <h1>Players:</h1>
                <table className={sTeam.overview_players}>
                    <thead>
                    <th>Player:</th>
                    <th>Games:</th>
                    <th>Win Rate:</th>
                    </thead>
                    <tbody>
                    {Object.values(team.players).map((player) => {
                        return player.is_current_team_member ? <TeamPlayer player={player}/> : null
                    })}
                    </tbody>
                </table>
                <h1>Heroes:</h1>
                <table className={sTeam.overview_heroes}>
                    <thead>
                    <th>Hero:</th>
                    <th>Games:</th>
                    <th>Win Rate:</th>
                    </thead>
                    <tbody>
                    {Object.values(team.heroes).slice(0, 9).map((hero) => {
                        return <TeamHero hero={hero}/>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeamOverview;
