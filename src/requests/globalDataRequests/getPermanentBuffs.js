export default function getPermanentBuffs() {
    return fetch("https://api.opendota.com/api/constants/permanent_buffs")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data
        });
}
