import React, {useEffect, useState} from 'react';
import TableHeadHeroes from "./TableHeadHeroes";
import CurHero from "./CurHero";
import {useSelector} from "react-redux";
import s from "./Heroes.module.css"
import Skeleton from "../../UI/Skeleton/Skeleton";
import * as _ from "lodash"

const HeroList = () => {

    const heroesRedux = useSelector(state => state.heroes)
    const [queue, setQueue] = useState('pro')
    let [t, setT] = useState(0)
    let [p, setP] = useState(0)
    const [heroes, setHeroes] = useState()

    useEffect(() => {
        heroesRedux.map((hero) => {
            setT(t += hero.turbo_picks)
            setP(p += hero.pro_pick)
        })
        setHeroes(_.orderBy(heroesRedux, 'localized_name', 'asc'))
    }, [])

    return (
        <div className={s.main}>
            <div>
                <button style={queue !== 'pro' ? ({color: '#3f3f3f'}) : ({color: 'white'})} className={s.button}
                        onClick={() => setQueue('pro')}>Pro
                </button>
                <button style={queue === 'pro' ? ({color: '#3f3f3f'}) : ({color: 'white'})} className={s.button}
                        onClick={() => setQueue('turbo')}>Turbo
                </button>
            </div>
            <div className={s.count}> TOTAL MATCHES: {queue === 'pro' ? (p / 10) : (t / 10)}</div>
            <table className={s.table}>
                <TableHeadHeroes queue={queue} heroes={heroes} setHeroes={setHeroes} p={p / 10} t={t / 10}/>
                <tbody>
                {heroes ? (
                    heroes.map((hero) => {
                        return <CurHero hero={hero} key={hero.id} t={t / 10} p={p / 10} queue={queue}/>
                    })
                ) : (<Skeleton/>)}
                </tbody>
            </table>
        </div>
    );
};

export default HeroList;
