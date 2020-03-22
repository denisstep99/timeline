import './Paranja_theme_light.scss';
import {withBemMod} from "@bem-react/core";
import {cnParanja, IParanjaProps} from "../index";


export interface IParanjaThemeLightProps{
    theme?: 'light';
}

export const withParanjaThemeLight = withBemMod<IParanjaThemeLightProps, IParanjaProps>(
    cnParanja(),
    {theme: 'light'}
);
