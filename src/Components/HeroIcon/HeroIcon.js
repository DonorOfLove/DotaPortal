import React from 'react';
import {Tooltip} from "@mui/material";
import str from '../../assets/imgs/attributes/strength.png'
import agi from '../../assets/imgs/attributes/agility.png'
import int from '../../assets/imgs/attributes/intelligence.png'
import s from './heroIcon.module.css'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const HeroIcon = ({id, isClickable = true}) => {
    const heroes = useSelector(state => state.heroes)
    const hero = heroes.find(curHero => curHero.id === id)
    return (
        <>
            {hero ? (<Tooltip title={
                <div className={s.main + ' ' + hero.primary_attr}>
                    <div className={s.wrap}>
                        <div>
                            <img src={`https://cdn.cloudflare.steamstatic.com/${hero.img}`}
                                 className={s.tooltip_avatar} alt='hero'/>
                            <div className={s.hp_mana}>
                        <span className={s.health}>
                            {hero.base_str * 20 + hero.base_health}
                        </span>
                                /
                                <span className={s.mana}>
                             {hero.base_int * 12 + hero.base_mana}
                        </span>
                            </div>
                        </div>
                        <div className={s.name_n_atrs}>
                            <h1 className={s.name}>{hero.localized_name}</h1>
                            <div className={s.attributes}>
                                <p className={s.atr_wrap}><img src={str} className={s.atr}
                                                               alt="#"/>{hero.base_str}+{hero.str_gain}</p>
                                <p className={s.atr_wrap}><img src={agi} className={s.atr}
                                                               alt="#"/>{hero.base_agi}+{hero.agi_gain}</p>
                                <p className={s.atr_wrap}><img src={int} className={s.atr}
                                                               alt="#"/>{hero.base_int}+{hero.int_gain}</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.stats}>
                        <p>Move Speed: {hero.move_speed}</p>
                        <p>Base Dmg: {hero.base_attack_min + hero["base_" + hero.primary_attr]}-
                            {hero.base_attack_max + hero["base_" + hero.primary_attr]}</p>
                        <p>Base Armor: {hero.base_armor}</p>
                        <p>Attack Range: {hero.attack_range}</p>
                    </div>
                    <div className={s.roles}>Roles: {hero.roles.map((role) => {
                        return (<span className={s.role} key={role}>{role} </span>);
                    })}
                    </div>
                </div>}>
                {isClickable ? (<Link to={`/heroes/${id}/overview`} params={hero}>
                    <img src={`https://cdn.cloudflare.steamstatic.com/${hero.img}`}
                         className={s.avatar} alt='hero'/>
                </Link>) : (<img src={`https://cdn.cloudflare.steamstatic.com/${hero.img}`}
                                 className={s.avatar} alt='hero'/>)}
            </Tooltip>) : null}

        </>
    );
};

export default React.memo(HeroIcon);
