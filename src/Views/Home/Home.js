import React, {useRef, useState} from 'react';
import s from "./Home.module.css"
import telegram from "../../assets/imgs/icons/telegram-icon.png"
import gitHub from "../../assets/imgs/icons/gitHub-icon.png"
import linkedIn from "../../assets/imgs/icons/linkedin-icon.png"
import {useSelector} from "react-redux";
import {changePerspective} from "../../lib/transformBG";
import decompose from "../../lib/items/decompose";

const Home = () => {

    let background = useRef()
    const patchNotes = useSelector(state => state.patchNotes)
    const [patch,setPatch] = useState(patchNotes[Object.keys(patchNotes).pop()])
    const [num, setNum] = useState(Object.keys(patchNotes)[Object.keys(patchNotes).length-1])
    const parse = require('html-react-parser');
    const items=useSelector(state => state.items)
    const ref=useRef()

    function handlePatch() {
        const selected=ref.current.options[ref.current.selectedIndex].value
        setPatch(patchNotes[selected])
        setNum(selected)

    }

    return (
        <div className={s.home} onMouseMove={(e) => changePerspective(e, background)}>
            <div className={s.title}>
                {/*This project is based on*/}
                {/*<a href="https://www.opendota.com" className={s.link}> "OpenDota" </a>*/}
                {/*open source api. If you enjoy this project you can make me a job offer.)*/}
                {/*<a href="https://github.com/DonorOfLove/CoolProject" a className={s.link}> Watch code of this*/}
                {/*    project </a>*/}
                <select ref={ref} className={s.select} onChange={()=>{handlePatch()}}>{Object.keys(patchNotes).reverse().map((patch)=>{
                    return <option key={patch} className={s.option} value={patch} onSelect={()=>handlePatch(patch)}>{patch}</option>})
                }
                </select>
                <ul>
                    <h1 className={s.header}>GENERAL:</h1>
                    {patch.general.map((title,index) => {
                        return <li key={title+index} className={s.li}>{parse(title)}</li>
                    })
                    }
                </ul>
                <ul>
                    <h1 className={s.header}>HEROES:</h1>
                    {decompose(patch.heroes)}
                </ul>
                <ul><h1 className={s.header}>ITEMS:</h1>
                    {decompose(patch.items,items)}
                </ul>
            </div>
            <div className={s.socials}>
                <a href="https://t.me/donoroflove" className={s.social}><img src={telegram} alt=""/></a>
                <a href="https://www.linkedin.com/in/stanislav-ezovitov-834b31233/" className={s.social}><img
                    src={linkedIn} alt=""/></a>
                <a href="https://github.com/DonorOfLove" className={s.social}><img src={gitHub} alt=""/></a>
            </div>
            <div className={s.sparks}></div>
            <div className={s.dota} ref={background}></div>
        </div>
    );
};

export default Home;
