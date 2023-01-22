export default function getConstItems() {
    return fetch(`https://api.opendota.com/api/constants/items`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
                return data
            }
        )
}
