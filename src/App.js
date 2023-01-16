import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Views/Home/Home";
import Match from "./Views/Match/Match";
import Nav from "./Components/Nav/Nav"
import Search from "./Views/Search/Search";
import Heroes from "./Views/Heroes/Heroes";
import Teams from "./Views/Teams/Teams";
import getConstHeroes from "./requests/getConstHeroes";
import {useDispatch, useSelector} from "react-redux";
import {
    setAbilities,
    setAbilitiesIds, setAbilitiesNTalents,
    setAllHeroes,
    setItems,
    setItemsIds,
    setPatchNotes
} from "./redux/actions/actions";
import Hero from "./Views/Hero/Hero";
import getConstItems from "./requests/getConstItems";
import getConstItemIds from "./requests/getConstItemIds";
import * as _ from 'lodash';
import Skeleton from "./Components/Skeleton/Skeleton";
import getPatchNotes from "./requests/getPatchNotes";
import Profile from "./Views/Profile/Profile";
import getAbilities from "./requests/getAbilities";
import getAbilitiesIids from "./requests/getAbilitiesIids";
import getHeroAbilities from "./requests/heroRequests/getHeroAbilities";
import Team from "./Views/Teams/Team/Team";

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
                    <Route path="/teams/" element={<Teams/>}/>
                    <Route path="/teams/:id/*" element={<Team/>}/>
                    <Route path="/heroes/" element={<Heroes/>}/>
                    <Route path="/heroes/:id/*" element={<Hero/>}/>
                    <Route path="*" element={<Home/>} />
                </Routes>
            ) : (<Skeleton/>)}
        </div>
    );
}

export default App;
