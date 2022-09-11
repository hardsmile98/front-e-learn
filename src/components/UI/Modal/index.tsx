/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import { COLORS, RADIUS, UNIT } from 'mytheme/theme';
import { CSSTransition } from 'react-transition-group';
import Opacity from 'components/Animations/Opacity';
import { MdClose as CloseIcon } from 'react-icons/md';

type Props = {
  children: React.ReactNode;
  open: boolean,
  onClose: any,
  title?: string,
};

const SubstrateBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const DialogBox = styled.div`
  width: 100%;
  max-width: 320px;
  padding: ${UNIT};
  color: ${COLORS.BG};
  border-radius: ${RADIUS};
  background: ${COLORS.WHITE};
  position: relative;
`;

const HeaderBox = styled.div`
    padding-right: 15px;
    font-weight: bold;
`;

const CloseBox = styled.div`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
`;

function Modal({
  children, open, onClose, title,
}:Props) {
  return (
    <CSSTransition
      in={open}
      timeout={400}
      unmountOnExit
    >
      <Opacity>
        <SubstrateBox onClick={onClose}>
          <DialogBox onClick={(e) => e.stopPropagation()}>
            <HeaderBox>
              {title && title}
              <CloseBox onClick={onClose}>
                <CloseIcon />
              </CloseBox>
            </HeaderBox>

            {children}
          </DialogBox>
        </SubstrateBox>
      </Opacity>
    </CSSTransition>
  );
}

export default Modal;
