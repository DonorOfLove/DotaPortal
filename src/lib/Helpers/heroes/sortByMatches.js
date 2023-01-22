let isSorted = false

export default function sortByMatches(heroes) {
    if (isSorted) {
        isSorted=!isSorted
      return heroes.sort((a, b) => b.games > a.games ? 1 : -1);
    } else {
        isSorted=!isSorted
        return heroes.sort((a, b) => b.games < a.games ? 1 : -1);
    }
}
