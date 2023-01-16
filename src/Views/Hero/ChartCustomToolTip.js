import getWinRate from "../../lib/common/getWinRate";

const ChartCustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">Duration: {`${label}`}m</p>
                <p>Matches: {payload[0].value}</p>
                <p className="desc">Win Rate: {getWinRate(payload[0].payload.wins,payload[0].payload.games_played)}%</p>
            </div>
        );
    }

    return null;
};
export default ChartCustomTooltip;
