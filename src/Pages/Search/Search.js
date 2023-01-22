import React, {} from 'react';
import {useSelector} from "react-redux";
import * as _ from 'lodash';
import s from './search.module.css'
import Skeleton from "../../UI/Skeleton/Skeleton";
import ProfileClickable from "../../Components/ProfileClickable/ProfileClickable";
import FoundMatch from "./FoundMatch";
    
const Search = () => {

    const searchData = useSelector(state => state.search)

    return (
        <>
            {Object.values(searchData.match)[0] !== 'Not Found' && !_.isEmpty(Object.values(searchData.match)) ? (
                <FoundMatch match={searchData.match}/>
            ) : null}
            {searchData.players.length > 0 ? (
                <table className={s.table}>
                    <thead className={s.thead}>
                    <h1> Players:</h1>
                    </thead>
                    {
                        searchData.players.map((player) => {
                            return (
                                <ProfileClickable player={player} key={player.account_id}
                                                  last_match_time={player.last_match_time}/>)
                        })
                    }</table>
            ) : <Skeleton/>}
        </>
    );
};

export default Search;
