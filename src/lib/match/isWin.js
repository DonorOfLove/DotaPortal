export default function isWin(match) {
    if (  match.player_slot <= 4){
        if (match.radiant_win){
            return true
        }else {
            return false
        }
    } else{
        if (match.radiant_win){
            return false
        }else {
            return true
        }

    }
}
