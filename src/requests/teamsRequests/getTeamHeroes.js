export default function getTeamHeroes(id) {
    return fetch(`https://api.opendota.com/api/teams/${id}/heroes`)
        .then((response) => {
            if (response.ok){
                return response.json();
            }
        })
        .then((data) => {
            return data
        });
}
