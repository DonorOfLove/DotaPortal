export default function isWin(match) {
    if (match.player_slot <= 4) {
        return !!match.radiant_win;
    } else {
        return !match.radiant_win;
    }
}
