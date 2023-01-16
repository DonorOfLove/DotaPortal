export default function getTeamPlayers(id) {
    return fetch(`https://api.opendota.com/api/teams/${id}/players`)
        .then((response) => {
            if (response.ok){
                return response.json();
            }
        })
        .then((data) => {
            return data
        });
}
