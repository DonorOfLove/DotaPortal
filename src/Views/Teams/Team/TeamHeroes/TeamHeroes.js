import React from 'react';
import sTeam from "../team.module.css";
import TeamHero from "./TeamHero";

const TeamHeroes = ({heroes}) => {
    return (
        <table className={sTeam.heroes}>
            <thead>
            <th>Hero:</th>
            <th>Games:</th>
            <th>Win Rate:</th>
            </thead>
            <tbody>
            {heroes.map((hero) => {
                return <TeamHero hero={hero}/>
            })}
            </tbody>
        </table>
    );
};

export default TeamHeroes;
