export default function getAbilities() {
    return fetch("https://api.opendota.com/api/constants/abilities")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data
        });
}
