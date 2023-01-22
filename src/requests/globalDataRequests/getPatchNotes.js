export default function getPatchNotes() {
    return fetch(`https://api.opendota.com/api/constants/patchnotes`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
                return data
            }
        )
}
