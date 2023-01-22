export default function getPlayer(account_id) {
    return fetch(`https://api.opendota.com/api/players/${account_id}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            return data
        })
}
