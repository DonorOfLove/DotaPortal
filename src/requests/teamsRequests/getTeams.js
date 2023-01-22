export default function getTeams(id) {
    return fetch(`https://api.opendota.com/api/teams${id ? (`/${id}`) : ('')}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            if (id) {
                return data
            } else {
                return data.slice(0, 200)
            }
        });
}
