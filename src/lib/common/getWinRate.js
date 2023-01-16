export default function getWinRate(win, games) {
    return ((win / games) * 100).toFixed(1);
}
