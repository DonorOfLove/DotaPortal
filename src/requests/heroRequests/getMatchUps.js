export default function getMatchUps(heroId) {
    return fetch(`https://api.opendota.com/api/heroes/${heroId}/matchups`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
                return data
            }
        )
}
