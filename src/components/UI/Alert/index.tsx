/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import { CSSTransition } from 'react-transition-group';
import Fade from 'components/Animations/Fade';
import {
  ALERT, FONTS, RADIUS, UNIT,
} from 'mytheme/theme';
import {
  MdErrorOutline as ErrorIcon,
  MdInfoOutline as InfoIcon,
  MdWarningAmber as WarningIcon,
  MdTaskAlt as SuccessIcon,
} from 'react-icons/md';

type AlertType = 'INFO' | 'ERROR' | 'WARNING' | 'SUCCESS';
type AlertAlign = 'center' | 'left';

interface IAlert {
  alertType: AlertType,
  alertAlign: AlertAlign
}

const ICONS = {
  INFO: <InfoIcon />,
  ERROR: <ErrorIcon />,
  WARNING: <WarningIcon />,
  SUCCESS: <SuccessIcon />,
};

const AlertBox = styled.div<IAlert>`
  width: 100%;
  background-color: ${(props) => ALERT[props.alertType].BG};
  color: ${(props) => ALERT[props.alertType].COLOR};
  padding: ${UNIT};
  display: flex;
  justify-content: ${(props) => (props.alertAlign === 'center' ? 'center' : 'flex-start')};
  align-items: center;
  border-radius: ${RADIUS};
  font-size: ${FONTS.small};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 5px;
  }
`;

type Props = {
  text: string,
  type: AlertType,
  aling?: AlertAlign,
  visible: boolean,
};

function Alert({
  text, type, aling = 'left', visible,
}: Props) {
  return (
    <CSSTransition
      in={visible}
      timeout={300}
      unmountOnExit
    >
      <Fade>
        <AlertBox alertType={type} alertAlign={aling}>
          {ICONS[type]}
          {text}
        </AlertBox>
      </Fade>
    </CSSTransition>
  );
}

export default Alert;
