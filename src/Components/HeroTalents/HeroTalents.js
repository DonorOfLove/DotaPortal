import React from 'react';
import {Tooltip} from "@mui/material";
import talentsImg from "../../assets/imgs/icons/talent.png"
import s from "./heroTalents.module.css"
import * as _ from 'lodash';
import {useSelector} from "react-redux";

const HeroTalents = ({hero}) => {

    const abilitiesNTalents = useSelector(state => state.abilitiesAndTalents)
    const abilities = useSelector(state => state.abilities)
    const arrLevel = [25, 20, 15, 10]

    return (
        <Tooltip title={
            <div className={s.talents}>
                {_.chunk(abilitiesNTalents[hero].talents, 2).map((arr, ind) => {
                    return <div className={s.row}>
                        <div className={s.talent}>
                            {abilities.abilities[arr[0].name].dname}
                        </div>
                        <h2 className={s.level}>{arrLevel[ind]}</h2>
                        <div className={s.talent}>
                            {abilities.abilities[arr[1].name].dname}
                        </div>
                    </div>
                })}
            </div>
        }>
            <img src={talentsImg} alt="#" className={s.talentsImg}/>
        </Tooltip>
    );
};

export default HeroTalents;
