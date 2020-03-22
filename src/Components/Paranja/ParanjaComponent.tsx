import {compose, composeU} from '@bem-react/core';

import {Paranja as ParanjaPresenter} from "./Paranja";
import {withParanjaThemeLight} from "./_theme/Paranja_theme_light";
import {withParanjaThemeDark} from "./_theme/Paranja_theme_dark";

export const Paranja = compose(composeU(withParanjaThemeLight, withParanjaThemeDark))(ParanjaPresenter);
