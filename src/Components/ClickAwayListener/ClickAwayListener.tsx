import * as React from 'react';
import {FC, ReactElement} from "react";
import {IClickAwayListenerProps} from "./index";

function getEventNameFromProp(prop: string): string {
    return prop.substring(2).toLowerCase();
}

function stopEventPropagation(event: React.MouseEvent): void {
    event.nativeEvent.stopImmediatePropagation();
}

const ClickAwayListener: FC<IClickAwayListenerProps> = function (props) {
    const {
        children,
        onClickAway,
        isDisabled = false,
        mouseEvent = 'onClick',
        touchEvent = 'onTouchEnd'
    } = props;

    const childProps = {
        [mouseEvent as string]: stopEventPropagation,
        [touchEvent as string]: stopEventPropagation,
        className: 'ClickAwayListener'
    };

    const nodeRef = React.useRef<HTMLDivElement>(null);

    const handleClickAway = React.useCallback((event) => {
        if (!nodeRef.current) {
            return;
        }

        onClickAway(event)
    }, [nodeRef]);

    React.useEffect(() => {
        if (isDisabled === false && touchEvent !== false) {
            document.addEventListener(getEventNameFromProp(touchEvent), handleClickAway);
        }

        return () => {
            document.removeEventListener(getEventNameFromProp(touchEvent as string), handleClickAway);
        }
    }, [isDisabled, mouseEvent]);

    React.useEffect(() => {
        if (isDisabled === false && mouseEvent !== false) {
            document.addEventListener(getEventNameFromProp(mouseEvent), handleClickAway);
        }
        return () => {
            document.removeEventListener(getEventNameFromProp(mouseEvent as string), handleClickAway);
        }
    }, [isDisabled, mouseEvent]);

    return <>{React.cloneElement(children as ReactElement, { ref: nodeRef, ...childProps })}</>
};

export default ClickAwayListener;
