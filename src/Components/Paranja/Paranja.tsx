import React, {FC} from 'react';
import {IParanjaProps} from "./index";
import './Paranja.scss'
import {cnParanja} from "./index";


export const Paranja : FC<IParanjaProps> = function Paranja(props: IParanjaProps) {
    return <div className={cnParanja({}, [props.className])}></div>
}
