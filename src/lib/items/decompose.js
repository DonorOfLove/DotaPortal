import s from "../../Views/Home/Home.module.css";
import find from "../hero/find";
const parse = require('html-react-parser');

export default function decompose(obj,items) {
    if (arguments.length<=1){
        return Object.entries(obj).map((hero) => {
            return <ul key={hero} className={s.patch_hero}><h2>{find(hero[0])}:</h2>
                {hero[1].map((title) => {
                    return <li key={title} className={s.li}>{title}</li>
                })}
            </ul>
        })
    }else {
        return Object.entries(obj).map((item) => {
            return <ul key={items[item[0]].dname} className={s.patch_hero}><h2>{items[item[0]].dname}:</h2>
                {item[1].map((title) => {
                    return <li key={title} className={s.li}>{parse(title)}</li>
                })}
            </ul>
        })
    }

}
