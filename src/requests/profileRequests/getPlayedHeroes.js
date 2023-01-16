export default function getPlayedHeroes(account_id) {
   return fetch(`https://api.opendota.com/api/players/${account_id}/heroes`)
        .then((response) => {
            if (response.ok){
                return response.json();
            }
        })
       .then((data) => {
           let arr = [];
           for (let i = 0; i < 10; i++) {
               arr.push(data[i]);
           }
           return arr;
       });

}
