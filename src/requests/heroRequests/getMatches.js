export default function getMatches(heroId) {
    return fetch(`https://api.opendota.com/api/heroes/${heroId}/matches`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
                return data
            }
        )
}
