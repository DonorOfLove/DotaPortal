export default function getTeamMatches(id) {
    return fetch(`https://api.opendota.com/api/teams/${id}/matches`)
        .then((response) => {
            if (response.ok){
                return response.json();
            }
        })
        .then((data) => {
            return data
        });
}
