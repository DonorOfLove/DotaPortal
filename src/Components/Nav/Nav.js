import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Clear, setMatch, setPlayers} from "../../redux/actions/actions";
import getPlayers from "../../requests/getPlayers";
import getMatch from "../../requests/getMatch";
import s from './nav.module.css'
import searchIcon from '../../assets/imgs/icons/search-icon.png'

const Nav = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    function search(e) {
        if (e.charCode == 13) {
            navigate('/search')
            dispatch(Clear)
            getPlayers(e.target.value).then(responce => dispatch(setPlayers(responce)))
            getMatch(e.target.value).then(responce => dispatch(setMatch(responce)))
        }
    }


    return (
        <nav className={s.nav}>

            <NavLink className={(navData) => (s.nav_link +" "+ (navData.isActive ? s.selected : ''))} to="/Home">Home</NavLink>
            <NavLink className={(navData) => (s.nav_link +" "+ (navData.isActive ? s.selected : ''))} to="/teams">Teams</NavLink>
            <NavLink className={(navData) => (s.nav_link +" "+ (navData.isActive ? s.selected : ''))} to="/heroes">Heroes</NavLink>
            <div className={s.nav_inp_wrapp}>
                <img src={searchIcon} alt="" className={s.search_icon}/>
                <input className={s.nav_inp} onKeyPress={search} placeholder={'Player name, match ID'}/>
            </div>
        </nav>
    );
};

export default React.memo(Nav);













