import React, {} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import * as _ from 'lodash';
import s from './search.module.css'
import Skeleton from "../../Components/Skeleton/Skeleton";
import ProfileClickable from "../../Components/ProfileClickable/ProfileClickable";
import FindedMatch from "./FindedMatch";

const Search = () => {

    const searchData = useSelector(state => state.search)

    return (
        <>
            {Object.values(searchData.match)[0] !== 'Not Found' &&!_.isEmpty(Object.values(searchData.match))? (
                   <FindedMatch match={searchData.match}/>
            ):null}
            {searchData.players.length > 0 ? (
                <table className={s.table}>
                    <thead className={s.thead}>
             <h1> Players:</h1>
                </thead>{
                    searchData.players.map((player) => {
                        return (
                            <ProfileClickable player={player} key={player.account_id} last_match_time={player.last_match_time}/>)
                    })
                }</table>
            ):<Skeleton/>}
        </>
    );
};

export default Search;
