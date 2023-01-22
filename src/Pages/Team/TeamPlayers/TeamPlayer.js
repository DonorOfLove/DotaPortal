import React from 'react';
import getWinRate from "../../../lib/Helpers/common/getWinRate";

const TeamPlayer = ({player}) => {
    return (
        <tr>
            <td>{player.name}</td>
            <td>{player.games_played}</td>
            <td>{getWinRate(player.wins, player.games_played)}%</td>
        </tr>
    );
};

export default TeamPlayer;
