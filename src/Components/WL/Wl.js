import React from 'react';
import s from "./Wl.module.css";

const Wl = ({wins,losses}) => {
    return (
        <div className={s.wl}>
            <p className={s.w}>{wins}</p>
            <p> - </p>
            <p className={s.l}>{losses}</p>
        </div>
    );
};

export default React.memo(Wl);
