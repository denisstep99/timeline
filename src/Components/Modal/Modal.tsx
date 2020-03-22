import React, {FC} from 'react';
import './Modal.scss'
import IModalProps, {cnModal} from './index';
import Portal from "../Portal/Portal";
import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";
import {Paranja} from "../Paranja/ParanjaComponent";
export const Modal: FC<IModalProps> = function (props: IModalProps) {
    const {
        children,
        className,
        container,
        isOpen,
        onClose = () => {
        },
        onRendered = () => {
        },
        disableScrollLock = false,
    } = props;

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = ''
        };
    }, [isOpen]);

    return (
        <div className={cnModal({}, [className])}>
            {isOpen && <Portal onRendered={onRendered} container={container} className={cnModal('portal', [className])}>
              <Paranja theme={'dark'}></Paranja>
                <ClickAwayListener onClickAway={onClose}>
                    {children}
                </ClickAwayListener>
            </Portal>}
        </div>)
};
