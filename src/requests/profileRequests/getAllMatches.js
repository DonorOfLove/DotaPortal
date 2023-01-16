export default function getAllMatches(account_id) {
    return fetch(`https://api.opendota.com/api/players/${account_id}/matches`)
        .then((response) => {
            if (response.ok){
                return response.json();
            }
        })
        .then((data) => {
            return data
        });
}

