import mHeroes from "../../mock-data/mConstHeroes.json";

export default function find(name) {
    for (let hero of mHeroes) {
        if (hero.name == `npc_dota_hero_${name}`) {
            return hero.localized_name
        }
    }
}

