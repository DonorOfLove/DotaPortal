import React from 'react';
import s from "./Match.module.css";
import HeroIcon from "../../Components/HeroIcon/HeroIcon";
import Ability from "../../Components/Ability/Ability";
import {useSelector} from "react-redux";

const Abilities = ({players}) => {

    const abilitiesIds = useSelector(state => state.abilities.ids)

    return (
        <table className={s.abilities}>
            <thead>
            <th>Hero</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
            <th>17</th>
            <th>18</th>
            <th>19</th>
            <th>20</th>
            <th>21</th>
            <th>22</th>
            <th>23</th>
            <th>24</th>
            <th>25</th>
            </thead>
            {players.map((player,index) => {
                return <tbody key={player.hero_id+index}>
                <td>
                        <HeroIcon id={player.hero_id}/>
                </td>

                {player.ability_upgrades_arr?.map((ab,index) => {
                    return <td key={ab+index+Math.random()}><Ability name={abilitiesIds[ab]}/></td>
                })}</tbody>
            })}</table>
    );
};

export default Abilities;
