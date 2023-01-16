export default function getHeroAbilities(heroId) {
    return fetch(`https://api.opendota.com/api/constants/hero_abilities`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
                return data
            }
        )
}
