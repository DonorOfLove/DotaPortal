import React, {useEffect} from 'react';
import {NavLink, Route, Routes, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import HeroIcon from "../../Components/HeroIcon/HeroIcon";
import s from "./hero.module.css"
import culcPopularity from "../../lib/Helpers/hero/culcPopularity";
import getAbilities from "../../lib/Helpers/hero/getAbilities";
import Ability from "../../Components/Ability/Ability";
import getWinRate from "../../lib/Helpers/common/getWinRate";
import getMatches from "../../requests/heroRequests/getMatches";
import {setDurations, setHeroPlayers, setItemPopularity, setMatches, setMatchUps} from "../../redux/actions/actions";
import getMatchUps from "../../requests/heroRequests/getMatchUps";
import getDurations from "../../requests/heroRequests/getDurations";
import getHeroPlayers from "../../requests/heroRequests/getHeroPlayers";
import getItemPopularity from "../../requests/heroRequests/getItemPopularity";
import Skeleton from "../../UI/Skeleton/Skeleton";
import Rankings from "./Rankings/Rankings";
import HeroItems from "./heroItems/HeroItems";
import Players from "./heroPlayers/Players";
import HeroMatchUps from "./HeroMatchUps/HeroMatchUps";
import HeroTalents from "../../Components/HeroTalents/HeroTalents";
import HeroOverview from "./HeroOverview";
import tabs from '../../Styles/tabs.module.css'

const Hero = () => {

    const dispatch = useDispatch()
    const abilities = useSelector(state => state.abilities)
    const params = useParams()
    const heroes = useSelector(state => state.heroes)
    const hero = heroes.find(curHero => curHero.id === +params.id) || heroes[1]
    const heroExtend = useSelector(state => state.heroExtend)

    useEffect(() => {
        getMatches(hero.id)
            .then(response => dispatch(setMatches(response)))
            .then(getMatchUps(hero.id)
                .then(response => dispatch(setMatchUps(response))))
            .then(getDurations(hero.id)
                .then(response => dispatch(setDurations(response))))
            .then(getHeroPlayers(hero.id)
                .then(response => dispatch(setHeroPlayers(response))))
            .then(getItemPopularity(hero.id)
                .then(response => dispatch(setItemPopularity(response))))
    }, [hero.id])

    return (
        <div className={s.main}>
            {heroExtend.matches && heroExtend.matchUps && heroExtend.durations && heroExtend.players && heroExtend.itemPopularity ? (
                <>
                    <div className={s.header}>
                        <div className={s.name}>
                            <HeroIcon id={hero.id} isClickable={false}/>
                            <div className={s.name_n_roles}>
                                <h1>{hero.localized_name}</h1>
                                <div className={s.roles}>{hero.roles.map((role) => <span key={role}
                                                                                         className={s.role}>{role} </span>)}</div>
                            </div>
                        </div>
                        <div className={s.popularity}>
                            <div>POPULARITY: {culcPopularity(heroes, hero.id) + 1}th</div>
                            <div>WINRATE: {getWinRate(hero.turbo_wins, hero.turbo_picks)}%</div>
                        </div>
                        <div className={s.abilities}>{getAbilities(hero.name, abilities).map((ab) => {
                            return <Ability key={ab + Math.random()} name={ab}/>
                        })}
                            <HeroTalents hero={hero.name}/>
                        </div>
                    </div>
                    <h1 className={s.best_items_h}>Best Items:</h1>
                    <HeroItems items={heroExtend.itemPopularity}/>
                    <div className={tabs.tabs}>
                        <NavLink className={({isActive}) => (tabs.nav_link + " " + (isActive ? tabs.selected : ''))}
                                 to={`overview`}>OVERVIEW</NavLink>
                        <NavLink className={({isActive}) => (tabs.nav_link + " " + (isActive ? tabs.selected : ''))}
                                 to={'matches'}>MATCHES</NavLink>
                        <NavLink className={({isActive}) => (tabs.nav_link + " " + (isActive ? tabs.selected : ''))}
                                 to={'matchups'}>MATCHUPS</NavLink>
                        <NavLink className={({isActive}) => tabs.nav_link + " " + (isActive ? tabs.selected : '')}
                                 to={'players'}>PLAYERS</NavLink>
                    </div>
                    <Routes>
                        <Route path="matches" element={<Rankings matches={Object.values(heroExtend.matches)}/>}/>
                        <Route path='matchups' element={<HeroMatchUps matchUps={Object.values(heroExtend.matchUps)}/>}/>
                        <Route path='players' element={<Players players={Object.values(heroExtend.players)}/>}/>
                        <Route path='overview' element={<HeroOverview heroExtend={heroExtend}/>}/>
                    </Routes>
                </>
            ) : <Skeleton/>}


        </div>
    );
};

export default Hero;
