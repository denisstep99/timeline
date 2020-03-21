import React from 'react';
import { compose} from '@bem-react/core';

import {Modal as ModalPresenter} from "./Modal";
import {IModalThemePrimaryProps, withModalThemePrimary} from "./_theme/Modal_theme_primary";
import IModalProps from "./index";


export const Modal = compose<IModalThemePrimaryProps>(withModalThemePrimary)(ModalPresenter);
