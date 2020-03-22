import './Paranja_theme_dark.scss';
import {withBemMod} from "@bem-react/core";
import {cnParanja, IParanjaProps} from "../index";


export interface IParanjaThemeDarkProps{
    theme?: 'dark';
}

export const withParanjaThemeDark = withBemMod<IParanjaThemeDarkProps, IParanjaProps>(
    cnParanja(),
    {theme: 'dark'}
);
