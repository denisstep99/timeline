import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import {IPortalProps} from "./index";


function createDefaultPlaceholder(className = '') {
    const element = document.createElement('div');
    element.classList.add('Portal');
    className.split(' ').forEach(e => element.classList.add(e));
    document.body.appendChild(element);

    return element;
}

const Portal : FC<IPortalProps> = function Portal(props: IPortalProps) {
    const { children, container, onRendered, className } = props;
    const [mountNode, setMountNode] = React.useState<null | Element>(null);

    React.useEffect(() => {
        setMountNode(container || createDefaultPlaceholder(className));
    }, [container]);

    React.useEffect(() => {
        onRendered && mountNode && onRendered();
    }, [onRendered, mountNode]);

    React.useEffect(() => {
        if (!container && mountNode) {
            return () => {document.body.removeChild(mountNode as Element)}
        }
    }, [container, mountNode]);

    return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
};

export default Portal;
