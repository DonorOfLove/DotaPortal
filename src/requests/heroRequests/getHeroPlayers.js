export default function getHeroPlayers(heroId) {
    return fetch(`https://api.opendota.com/api/heroes/${heroId}/players`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
                return data
            }
        )
}
