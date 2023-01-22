import React from 'react';
import s from "./profile.module.css";
import getWinRate from "../../lib/Helpers/common/getWinRate";
import ProfileClickable from "../../Components/ProfileClickable/ProfileClickable";
import {setPeers} from "../../redux/actions/actions";
import {useDispatch} from "react-redux";
import commonSort from "../../lib/Helpers/common/commonSort";

const ProfilePeers = ({peers}) => {

    const dispatch = useDispatch()

    return (
        <table className={s.peers}>
            <thead>
            <th>Player:</th>
            <th onClick={() => dispatch(setPeers(commonSort(peers, 'with_games')))}>Played:</th>
            <th onClick={() => dispatch(setPeers(commonSort(peers, 'with_win')))}>WR:</th>
            </thead>
            <tbody>
            {peers.map((user) => {
                return (
                    <tr key={user.personaname}>
                        <td><ProfileClickable player={user} last_match_time={null}/></td>
                        <td>{user.with_games}</td>
                        <td>{getWinRate(user.with_win, user.with_games)}%</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default React.memo(ProfilePeers);
