import React from "react";
import {withBemMod} from "@bem-react/core";
import './Modal_theme_primary.scss';

import IModalProps, {cnModal} from "../index";
import {Modal} from "../Modal";

export interface IModalThemePrimaryProps{
    theme?: 'primary';
}

function render(props: IModalThemePrimaryProps & IModalProps): React.ReactElement {
    return <Modal {...props}></Modal>
}

export const withModalThemePrimary = withBemMod<IModalThemePrimaryProps, IModalProps>(
    cnModal(),
    {theme: 'primary'},
    (Modal) => render
);
