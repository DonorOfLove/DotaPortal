export default function culcPopularity(heroes, id) {
    heroes.sort((a, b) => a.turbo_picks < b.turbo_picks ? 1 : -1)
    return heroes.findIndex(hero => hero.id === id)
}
