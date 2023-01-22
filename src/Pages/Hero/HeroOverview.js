import React from 'react';
import s from "./hero.module.css";
import Rankings from "./Rankings/Rankings";
import Players from "./heroPlayers/Players";
import HeroMatchUps from "./HeroMatchUps/HeroMatchUps";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import getTime from "../../lib/Helpers/common/getTime";
import ChartCustomToolTip from "./ChartCustomToolTip";

const HeroOverview = ({heroExtend}) => {
    return (
        <>
            {heroExtend.durations ? (<ResponsiveContainer width="100%" height="70%">
                <BarChart
                    margin={{top: 30}}
                    width={500}
                    height={200}
                    data={Object.values(heroExtend.durations).sort((a, b) => b.duration_bin < a.duration_bin ? 1 : -1)}>
                    <XAxis dataKey={(val) => getTime(val.duration_bin)}/>
                    <YAxis dataKey='games_played' name='games_played'/>
                    <Tooltip content={<ChartCustomToolTip/>}/>
                    <Legend/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Bar dataKey='games_played' fill="#8884d8" name='Win Rate'/>
                </BarChart>
            </ResponsiveContainer>) : null}
            <div className={s.wrap}>
                <div className={s.rankingsWrap}>
                    <h1 className={s.rankings_h}>Matches:</h1>
                    {heroExtend.matches ? (
                        <Rankings matches={Object.values(heroExtend.matches).slice(0, 18)}/>) : null}
                </div>
                <div className={s.players_n_mathUps}>
                    <h1 className={s.players_h}>Players:</h1>
                    <Players players={Object.values(heroExtend.players).slice(0, 10)}/>
                    <h1 className={s.match_ups_h}>Match Ups:</h1>
                    <HeroMatchUps matchUps={Object.values(heroExtend.matchUps).slice(0, 10)}/>
                </div>
            </div>
        </>

    );
};

export default HeroOverview;
