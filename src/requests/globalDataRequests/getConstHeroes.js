export default function getConstHeroes() {
    return fetch("https://api.opendota.com/api/heroStats")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data
        });
}
