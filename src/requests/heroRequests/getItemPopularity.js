export default function getItemPopularity(heroId) {
    return fetch(`https://api.opendota.com/api/heroes/${heroId}/itemPopularity`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
                return data
            }
        )
}
