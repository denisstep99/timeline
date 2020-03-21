import {IClassNameProps} from '@bem-react/core'
import React from "react";

export interface IPortalProps extends IClassNameProps {
    children?: React.ReactNode;

    /**
     * A node.
     * By default, it uses the body of the top-level document object,
     * so it's simply `document.body` most of the time.
     */
    container?: Element | null;

    onRendered?: () => void;
}
