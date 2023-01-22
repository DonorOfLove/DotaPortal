import React from 'react';
import {Tooltip} from "@mui/material";
import s from "../Ability/ability.module.css"
import {useSelector} from "react-redux";
import talent from '../../assets/imgs/icons/talent.png'

const Ability = ({name}) => {

    const abilities = useSelector(state => state.abilities.abilities)
    const ability = abilities[name]

    return (
        <Tooltip title={
            <div className={s.background}>
                {ability.attrib ? (<>
                    <div className={s.header}>
                        <img className={s.tooltipImg}
                             src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${name}.png`}
                             alt="#"/>
                        <h1 className={s.name}>{ability.dname}</h1>
                    </div>
                    <p className={s.target}>TARGET: {ability.behavior}</p>
                    <p className={s.description}> {ability.desc}</p>
                    <ul>
                        {ability.attrib.map((atr) => <p key={atr}>{atr.header} {
                            Array.isArray(atr.value) ? (atr.value.map((item) => <span key={item}>{item} / </span>)) : (
                                <span key={atr}>{atr.value}</span>)}</p>)
                        }</ul>
                </>) : (<h1 className={s.name}>{ability.dname}</h1>
                )}
            </div>
        }>
            <img className={s.img}
                 src={ability.attrib ? (`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${name}.png`) : (talent)}
                 alt="#"/>
        </Tooltip>
    );
};

export default React.memo(Ability);
