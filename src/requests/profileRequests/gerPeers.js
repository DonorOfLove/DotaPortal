export default function getPeers(account_id) {
    return fetch(`https://api.opendota.com/api/players/${account_id}/peers`)
        .then((response) => {
            if (response.ok){
                return response.json();
            }
        })
        .then((data) => {
            return data
        });
}
