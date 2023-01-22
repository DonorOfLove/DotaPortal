export default function teamsSort(players) {
    let radiant = [];
    let dire = [];
    for (let player of players) {
        if (player.isRadiant) {
            radiant.push(player);
        } else {
            dire.push(player);
        }
    }
    return {
        'radiant': radiant,
        'dire': dire
    }
}

