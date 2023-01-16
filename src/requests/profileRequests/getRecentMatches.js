export default function getRecentMatches(account_id) {
    return fetch(`https://api.opendota.com/api/players/${account_id}/recentMatches`)
        .then((response) => {
            if (response.ok){
                return response.json();
            }
        })
        .then((data) => {
            return data
        });
}
