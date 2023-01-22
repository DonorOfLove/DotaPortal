import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Match from "./Pages/Match/Match";
import Nav from "./Components/Nav/Nav"
import Search from "./Pages/Search/Search";
import HeroList from "./Pages/HeroList/HeroList";
import TeamList from "./Pages/TeamList/TeamList";
import getConstHeroes from "./requests/globalDataRequests/getConstHeroes";
import {useDispatch, useSelector} from "react-redux";
import {
    setAbilities,
    setAbilitiesIds, setAbilitiesNTalents,
    setAllHeroes,
    setItems,
    setItemsIds,
    setPatchNotes
} from "./redux/actions/actions";
import Hero from "./Pages/Hero/Hero";
import getConstItems from "./requests/globalDataRequests/getConstItems";
import getConstItemIds from "./requests/globalDataRequests/getConstItemIds";
import * as _ from 'lodash';
import Skeleton from "./UI/Skeleton/Skeleton";
import getPatchNotes from "./requests/globalDataRequests/getPatchNotes";
import Profile from "./Pages/Profile/Profile";
import getAbilities from "./requests/globalDataRequests/getAbilities";
import getAbilitiesIids from "./requests/globalDataRequests/getAbilitiesIids";
import getHeroAbilities from "./requests/heroRequests/getHeroAbilities";
import Team from "./Pages/Team/Team";

function App() {

    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    const heroes = useSelector(state => state.heroes)
    const itemIDs = useSelector(state => state.itemsIds)
    const patchNotes = useSelector(state => state.patchNotes)

    useEffect(() => {
        getConstHeroes().then(responce => dispatch(setAllHeroes(responce)))
        getConstItems().then(response => dispatch(setItems(response)))
        getConstItemIds().then(response => dispatch(setItemsIds(response)))
        getPatchNotes().then(response => dispatch(setPatchNotes(response)))
        getAbilities().then(response => dispatch(setAbilities(response)))
        getAbilitiesIids().then(response => dispatch(setAbilitiesIds(response)))
        getHeroAbilities().then(response => dispatch(setAbilitiesNTalents(response)))
    }, []);

    return (
        <div className="App">
            <Nav/>
            {!_.isEmpty(items) && !_.isEmpty(itemIDs) && !_.isEmpty(patchNotes) && !_.isEmpty(heroes) ? (
                <Routes>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/matches/:id" element={<Match/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/player/:id/*" element={<Profile/>}/>
                    <Route path="/teams/" element={<TeamList/>}/>
                    <Route path="/teams/:id/*" element={<Team/>}/>
                    <Route path="/heroes/" element={<HeroList/>}/>
                    <Route path="/heroes/:id/*" element={<Hero/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            ) : <Skeleton/>}
        </div>
    );
}

export default App;
