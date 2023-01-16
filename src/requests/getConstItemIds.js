export default function getConstItemIds() {
    return fetch(`https://api.opendota.com/api/constants/item_ids`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
                return data
            }
        )
}
