import React, {useEffect, useRef, useState} from 'react';
import ActivityCalendar from "react-activity-calendar";
import Skeleton from "../../Components/Skeleton/Skeleton";
import getUnixTime from "../../lib/common/getUnixTime";
import moment from "moment";
import * as _ from "lodash";
import ReactTooltip from "react-tooltip";
import isWin from "../../lib/match/isWin";
import getWinRate from "../../lib/common/getWinRate";
import s from "./profile.module.css";
import Match from "../../Components/Match";

const ProfileActivity = ({matches}) => {

    const [activityData, setActivityData] = useState()
    const [editedMatches, setEditedMatches] = useState()
    const [day, setDay] = useState()
    const ref = useRef(null)

    function showMatches(e) {
        setDay(editedMatches[e.target.dataset.date])
        ref.current?.scrollIntoView({behavior: "smooth"});

    }

    function getLevel(day) {
        let games = day.length
        let wins = 0
        for (let match of day) {
            wins = wins + Number(match.isWin)
        }
        let wr = Math.floor(getWinRate(wins, games) / 25)
        if (wr === 0) {
            wr = 1
        }
        return wr
    }

    function convertActivityData(matches) {
        let arr = []
        for (let match of matches) {
            const matchData = {
                date: moment(getUnixTime(match.start_time)).format("YYYY-MM-DD"),
                isWin: isWin(match)
            }
            arr.push(matchData)
        }
        arr = _.groupBy(arr, 'date')

        setEditedMatches(_.groupBy(matches, (match) => moment(getUnixTime(match.start_time)).format("YYYY-MM-DD")))
        let set = []
        for (let key in arr) {
            set.push({date: key, count: arr[key].length, level: getLevel(arr[key])})
        }
        let data = _.groupBy(set, (match) => match.date.slice(0, 4))
        for (let year in data) {
            if (data[year][0].date !== `${year}-01-01`) {
                data[year].unshift({date: `${year}-01-01`, count: 0, level: 0})
                console.log(data)
            }
            if (data[year][0].date !== `${year}-12-31`) {
                data[year].push({date: `${year}-12-31`, count: 0, level: 0})
            }
        }
        setActivityData(data)
    }

    useEffect(() => {
       convertActivityData(matches)
    }, [])

    return (
        <div className={s.activity}>
            {activityData ? (
                Object.values(activityData).map((data) => {
                    return <ActivityCalendar data={data}
                                             eventHandlers={{
                                                 onClick: (e) => showMatches(e)
                                             }}
                                             showWeekdayLabels={true}
                                             labels={{
                                                 tooltip: '{{count}} games {{date}}',
                                                 totalCount: '{{count}} games played in {{year}}',
                                             }}
                                             theme={{
                                                 level0: '#2f2f2f',
                                                 level1: '#7d0000',
                                                 level2: '#898700',
                                                 level3: '#005806',
                                                 level4: '#01950c'
                                             }}
                    >
                        <ReactTooltip html/>
                    </ActivityCalendar>
                })
            ) : (<Skeleton/>)}
            {day ? (<table className={s.recent_matches}>
                <thead className={s.head}>
                <th>Hero:</th>
                <th>Queue:</th>
                <th>Duration:</th>
                <th>K/D/A</th>
                <th>Team:</th>
                <th>Played:</th>
                </thead>
                <tbody>
                {day.map((match) => {
                        return (
                            <Match match={match}/>
                        )
                    }
                )
                }
                </tbody>
            </table>) : null}
            <div ref={ref}>.</div>
        </div>
    );
};

export default ProfileActivity;
