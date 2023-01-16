export default function getMatch(id) {
    return fetch(`https://api.opendota.com/api/matches/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
                return data
            }
        )
}
