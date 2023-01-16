import React, {useEffect, useState} from 'react';
import TableHead from "../../Components/PlayerCard/Table/tableHead";
import PlayerCard from "../../Components/PlayerCard/PlayerCard";
import s from "./Match.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Clear, setMatch,} from "../../redux/actions/actions";
import getMatch from "../../requests/getMatch";
import Skeleton from "../../Components/Skeleton/Skeleton";
import {LineChart, ResponsiveContainer, Tooltip, YAxis, Line, XAxis} from "recharts";
import mRegions from "../../mock-data/mRegions.json"
import Abilities from "./Ablities";
import { useResizeDetector } from 'react-resize-detector';
import teamsSort from "../../lib/common/teamsSort";

const Match = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const { width, height, ref } = useResizeDetector();
    const matches = useSelector(state => state.search.match)
    const [direTeam, setDireTeam] = useState([]);
    const [radiantTeam, setRadiantTeam] = useState([])

    useEffect(() => {
        dispatch(Clear)
        getMatch(params.id)
            .then(responce => dispatch(setMatch(responce)))
            .then(data => teamsSort(data.payload.players))
            .then(teams=>(setRadiantTeam(teams.radiant), setDireTeam(teams.dire)))

    }, [])

    return (
        <div className={s.match}>
            {direTeam.length > 0 ? (<>
                    <div className={s.match_info}>
                        <div className={s.main_info}>
                            <h1 className={matches.radiant_win ? (s.radiant_team) : (s.dire_team)}>{matches.radiant_win ? "RADIAN" : "DIRE"} WIN</h1>
                            <div className={s.match_info_numbers}>
                                <p className={s.radiant_score}>{matches.radiant_score}&nbsp;</p>
                                <p>{`${Math.floor(matches.duration / 60)}:${matches.duration % 60}`}&nbsp;</p>
                                <p className={s.dire_score}>&nbsp;{matches.dire_score}</p>
                            </div>
                        </div>
                        <div className={s.extra_info}>
                            <p className={s.match_id}>Match id: {matches.match_id}</p>
                            {matches.league ? (<>
                                    <p>League: {matches.league.name}</p>
                                    <p>Region: {mRegions[matches.region]}</p>
                                </>
                            ) : (null)}
                        </div>
                    </div>
                    <span className={s.dire_team} >Dire:</span>
                    <div className={s.table_wrap}>
                        <table className={s.team} ref={ref}>
                            <TableHead/>
                            <tbody>
                            {direTeam.map((player) => {
                                return <PlayerCard player={player} key={player.player_slot}/>
                            })}
                            </tbody>
                        </table>
                    </div>

                    <span className={s.radiant_team}>Radiant:</span>
                    <div className={s.table_wrap}>
                        <table className={s.team}>
                            <TableHead/>
                            <tbody>
                            {radiantTeam.map((player) => {
                                return <PlayerCard player={player} key={player.player_slot}/>
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div className={s.table_wrap}><Abilities players={matches.players}/></div>
                    <div className={s.charts}>
                    {matches.radiant_gold_adv ? (
                        <>

                            <h1>Gold Adv</h1>
                            <ResponsiveContainer width={width} height={400}>
                            <LineChart
                                data={matches.radiant_gold_adv}>
                                <Tooltip/>
                                <Line type="basis" dataKey={v => v} stroke="#8884d8" dot={false} name='radiant gold adv'/>
                                <XAxis/>
                                <YAxis/>
                            </LineChart>
                        </ResponsiveContainer>

                        </>
                    ) : (null)}
                    {matches.radiant_xp_adv ? (
                        <>
                            <h1>Xp Adv</h1>
                            <ResponsiveContainer width={width} height={400}>
                            <LineChart
                                data={matches.radiant_xp_adv}>
                                <Tooltip/>
                                <Line type="basis" dataKey={v => v} stroke="#8884d8" dot={false} name='radiant xp adv'/>
                                <XAxis/>
                                <YAxis/>
                            </LineChart>
                            </ResponsiveContainer>
                        </>) : (null)}
                    </div>
                </>
            ) : (<Skeleton/>)}
        </div>
    );
};

export default Match;
