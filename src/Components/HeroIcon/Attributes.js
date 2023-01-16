import React from 'react';
import str from "../../assets/imgs/attributes/strength.png";
import agi from "../../assets/imgs/attributes/agility.png";
import int from "../../assets/imgs/attributes/intelligence.png";

const Attributes = ({hero}) => {
    const atrs = ['str', 'agi', 'int']
    return (
        <div>
            {atrs.map((atr) =>
                <div key={atr}>
                    <img src={{atr}} alt="#"/><p>
                    {eval("hero.base_" + atr)}+{eval("hero."+atr +"_gain")}
                </p>
            </div>)}

        </div>
    );
};

export default Attributes;
