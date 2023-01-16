export default function getDurations(heroId) {
    return fetch(`https://api.opendota.com/api/heroes/${heroId}/durations`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
                return data
            }
        )
}
