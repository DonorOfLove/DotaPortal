export default function getTalents(hero, abilities) {
    const name = hero.replace('npc_dota_hero_', '');
    let arr = []
    Object.keys(abilities.abilities).map((ab) => {
        if (ab.includes(name)) {
            arr.push(ab)
        }
    })
    return arr = arr.filter(word => word.includes('special_bonus')).slice(0, 8)
}

