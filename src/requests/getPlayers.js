export default function getPlayers(value) {
    return fetch(`https://api.opendota.com/api/search?q=${value}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data
        })
}
