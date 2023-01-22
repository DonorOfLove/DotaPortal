import React, {useEffect, useRef, useState} from 'react';
import ActivityCalendar from "react-activity-calendar";
import Skeleton from "../../UI/Skeleton/Skeleton";
import getUnixTime from "../../lib/Helpers/common/getUnixTime";
import moment from "moment";
import * as _ from "lodash";
import ReactTooltip from "react-tooltip";
import s from "./profile.module.css";
import Match from "../../Components/Match";
import convertActivityData from "../../lib/Helpers/profile/convertActivityData";

const ProfileActivity = ({matches}) => {

    const [activityData, setActivityData] = useState()
    const [editedMatches, setEditedMatches] = useState()
    const [day, setDay] = useState()
    const ref = useRef(null)

    function showMatches(e) {
        setDay(editedMatches[e.target.dataset.date])
        ref.current?.scrollIntoView({behavior: "smooth"});
    }

    useEffect(() => {
        setActivityData(convertActivityData(matches))
        setEditedMatches(_.groupBy(matches, (match) => moment(getUnixTime(match.start_time)).format("YYYY-MM-DD")))
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
