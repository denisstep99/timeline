import {IClassNameProps} from '@bem-react/core'
import React from "react";
import {IPortalProps} from "../Portal";
import { cn } from '@bem-react/classname';

export const cnModal = cn('Modal');

export default interface IModalProps extends IClassNameProps {
    children: React.ReactNode;
    onRendered?(): void;
    onClose?(): void;
    disableScrollLock?: boolean;
    container?: IPortalProps['container'];
    isOpen?: boolean;
}
