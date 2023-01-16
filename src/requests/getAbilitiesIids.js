export default function getAbilitiesIids() {
    return fetch("https://api.opendota.com/api/constants/ability_ids")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data
        });
}
