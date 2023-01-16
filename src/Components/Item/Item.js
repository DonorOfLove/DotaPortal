import React from 'react';
import {Tooltip} from "@mui/material";
import s from "./item.module.css"
import {useSelector} from "react-redux";

const Item = ({name, style}) => {
    const items = useSelector(state => state.items)
    const item = items[name]

    return (
        <>
        {item?( <Tooltip title={
                <div className={s.background}>
                    <div className={s.header}>
                        <img  src={`https://cdn.cloudflare.steamstatic.com/${items[name]["img"]}`} alt="#"/>
                        <div className={s.name}>
                            <h1>{item.dname}</h1>
                            <p className={s.cost}>{!!item.cost ? (item.cost) : (null)}</p>
                        </div>
                    </div>
                    <ul>
                        {item.attrib.map((atr) => <p className={s.atr} key={atr}>{atr.header}{atr.value} {atr.footer}</p>)}
                    </ul>
                    <ul>{item.hint?.map((hint) => <p className={s.hint} key={hint}>{hint}</p>)}</ul>
                    <p className={s.lore}>{item.lore}</p>
                    {item.components ? (
                        <p>Components: <br/>
                            {item.components.map((component) =>
                                <img className={s.component} key={component}
                                     src={`https://cdn.cloudflare.steamstatic.com/${items[component]["img"]}`} alt="#"/>)}
                        </p>
                    ) : (null)}
                </div>}>
                <img className={style || 'clickableItem'}
                     src={`https://cdn.cloudflare.steamstatic.com/${items[name]["img"]}`} alt="#"/>
            </Tooltip>):(null)}
       </>
    );
};

export default React.memo(Item);
