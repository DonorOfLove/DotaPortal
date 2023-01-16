import React from 'react';
import s from "../hero.module.css";
import Item from "../../../Components/Item/Item";
import {useSelector} from "react-redux";

const HeroItems = ({items}) => {

    const itemsIds = useSelector(state => state.itemsIds)
    return (
        <table className={s.items}>
            <thead>
            <th>Start Items:</th>
            <th>Early Game:</th>
            <th>Mid Game:</th>
            <th>Late Game:</th>
            </thead>
            <tbody>
            <td className={s.item}>
                {Object.keys(items.start_game_items).map((item) => {
                    return <Item name={itemsIds[item]} key={item}/>
                })}
            </td>

            <td className={s.item}>
                {Object.keys(items.early_game_items).map((item) => {
                    return <Item name={itemsIds[item]} key={item}/>
                })}
            </td>

            <td className={s.item}>

            {Object.keys(items.mid_game_items).map((item) => {
                    return <Item name={itemsIds[item]} key={item}/>
                })}
            </td>

            <td className={s.item}>

            {Object.keys(items.late_game_items).map((item) => {
                    return <Item name={itemsIds[item]} key={item}/>
                })}
            </td>
            </tbody>
        </table>
    );
};

export default HeroItems;
