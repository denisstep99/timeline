import {IClassNameProps} from "@bem-react/core";
import React from "react";

export interface IClickAwayListenerProps extends IClassNameProps{
    children: React.ReactNode;
    onClickAway: (event: React.MouseEvent<Document>) => void;

    /**
     * mouseEvent
     * The mouse event to listen to.
     *
     * default: onClick
     */
    mouseEvent?: 'onClick' | 'onMouseDown' | 'onMouseUp' | false;

    /**
     * touchEvent
     * The touch event to listen to.
     *
     * default: onTouchEnd
     */
    touchEvent?: 'onTouchStart' | 'onTouchEnd' | false;

    /**
     * disable functionality of the component
     *
     * default: false
     */
    isDisabled?: boolean;
}
