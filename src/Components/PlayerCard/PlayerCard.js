import React from 'react';
import s from "./PlayerCard.module.css"
import HeroIcon from "../HeroIcon/HeroIcon";
import {useSelector} from "react-redux";
import Item from "../Item/Item";
import aghanimTrue from "../../assets/imgs/aghanim/aghanimTrue.png"
import aghanimFalse from "../../assets/imgs/aghanim/aghanimFalse.png"
import shardTrue from "../../assets/imgs/shard/shardTrue.png"
import shardFalse from "../../assets/imgs/shard/shardFalse.png"
import mPermanentBuffs from "../../mock-data/mPermanentBuffs.json"
import mConstAbilities from "../../mock-data/mConstAbilities.json"
import Ability from '../Ability/Ability'
import {Link} from "react-router-dom";

const PlayerCard = ({player}) => {
    const items = useSelector(state => state.items)
    const itemIDs = useSelector(state => state.itemsIds)
    const filteredItems = player.permanent_buffs ? (player.permanent_buffs.filter(buff => buff.permanent_buff !== 2 && buff.permanent_buff !== 12)) : ([])

    function itemsToArr() {
        let arr = []
        for (let i = 0; i < 6; i++) {
            if (player["item_" + [i]] !== 0) {
                arr.push(player["item_" + [i]])
            }
        }
        return arr
    }

    return (
        <tr className={s.playerCard}>
            <td className={s.info}>
                <HeroIcon id={player.hero_id}/>
                <div className={s.lvl}>
                    <p className={s.lvl}>{player.level}</p>
                </div>
                {player.personaname ? (
                    <Link to={`/player/${player.account_id}/overview`} className={s.name}>
                        {player.personaname}
                    </Link>) : (<p>Anon</p>)}
            </td>
            <td className={s.KDA}> {player.kills}/{player.deaths}/{player.assists} </td>
            <td className={s.net}>{player.net_worth}</td>
            <td className={s.lh}>{player.last_hits} / {player.denies}</td>
            <td className={s.gpm}>{player.gold_per_min} / {player.xp_per_min}</td>
            <td className={s.damage}>{player.hero_damage}</td>
            <td className={s.healing}>{player.hero_healing}</td>
            <td className={s.items}>
                {itemsToArr().map((item, index) =>
                    <Item key={index}  name={itemIDs[item]}/>)}
            </td>
            <td className={s.buffs}>
                {player.item_neutral ? (<Item name={itemIDs[player['item_neutral']]}
                                              style={s.neutral_item}/>)
                    : <div className={s.empty_neutral}></div>}
                <div className={s.aghanimPlace}>
                    {player.permanent_buffs ? (<>
                        {player.permanent_buffs.find(buff => buff.permanent_buff === 2) ?
                            (<img src={aghanimTrue} alt="" className={s.aghanim}/>) :
                            (<img src={aghanimFalse} alt="" className={s.aghanim}/>)}
                        {player.permanent_buffs.find(buff => buff.permanent_buff === 12) ?
                            (<img src={shardTrue} alt="" className={s.shard}/>) :
                            (<img src={shardFalse} alt="" className={s.shard}/>)}
                    </>) : (<>
                        <img src={aghanimFalse} alt="" className={s.aghanim}/>
                        <img src={shardFalse} alt="" className={s.shard}/>
                    </>)}
                </div>
                {!filteredItems.length > 0 ? null : (
                        filteredItems.map((buff, index) =>
                            mPermanentBuffs[buff.permanent_buff] in mConstAbilities ? (
                                <div key={buff.permanent_buff+buff.stack_count}>
                                    <Ability name={mPermanentBuffs[buff.permanent_buff]}/>
                                    <p className={s.stack_count}>{buff.stack_count}</p>
                                </div>
                            ) : (
                                <div key={buff.permanent_buff+buff.stack_count}>
                                    <Item items={items} itemIds={itemIDs} name={mPermanentBuffs[buff.permanent_buff]}
                                          key={index}/><p className={s.stack_count}>{buff.stack_count}</p>
                                </div>
                            )
                        )
                    )
                }
            </td>
        </tr>
    );
};

export default PlayerCard;
