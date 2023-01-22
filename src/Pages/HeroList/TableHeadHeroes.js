import React, {useEffect, useState} from 'react';
import sortHeroes from "../../lib/Helpers/common/commonSort";
import s from "./Heroes.module.css"

const TableHeadHeroes = ({queue, heroes, setHeroes}) => {

    let [dir, setDir] = useState()
    const [sortField, setSortField] = useState('')

    useEffect(() => {
        import("../../lib/Helpers/common/commonSort")
            .then(data => setDir(!data.isSorted))
    })

    return (
        <thead className={s.head}>
        <th onClick={() => {
            setSortField('heroes')
            setHeroes(sortHeroes(heroes, 'localized_name'))
        }}>
            Name {sortField === 'heroes' ? (dir ? ("↓") : ("↑")) : null}
        </th>
        {queue === 'pro' ? (
            <>
                <th onClick={() => {
                    setSortField('pro_pick')
                    setHeroes(sortHeroes(heroes, 'pro_pick'))
                }}>Picks {sortField === 'pro_pick' ? (!dir ? ("↓") : ("↑")) : null}</th>
                <th onClick={() => {
                    setSortField('pro_ban')
                    setHeroes(sortHeroes(heroes, 'pro_ban'))
                }}>Ban% {sortField === 'pro_ban' ? !dir ? "↓" : "↑" : null}
                </th>
                <th onClick={() => {
                    setSortField('pro_win')
                    setHeroes(sortHeroes(heroes, 'pro_win'))
                }}>Wins {sortField === 'pro_win' ? !dir ? "↓" : "↑" : null}</th>
            </>
        ) : (
            <>
                <th onClick={() => {
                    setSortField('turbo_picks')
                    setHeroes(sortHeroes(heroes, 'turbo_picks'))
                }}>Picks {sortField === 'turbo_picks' ? !dir ? "↓" : "↑" : null}</th>
                <th onClick={() => {
                    setSortField('turbo_wins')
                    setHeroes(sortHeroes(heroes, 'turbo_wins'))
                }}>Wins {sortField === 'turbo_wins' ? !dir ? "↓" : "↑" : null}</th>
            </>)}
        </thead>
    );
};

export default TableHeadHeroes;
