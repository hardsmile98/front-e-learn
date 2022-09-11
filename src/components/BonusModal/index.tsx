import React, { useState } from 'react';
import Modal from 'components/UI/Modal';
import styled from '@emotion/styled';
import money from 'assets/imgs/money.svg';
import { UNIT, UNIT2 } from 'mytheme/theme';

type Props = {
  coins: number,
};

const WrapperBox = styled.div`
  padding: ${UNIT2} 0;
  text-align: center;
  img {
    width: 70px;
    height: 70px;
    margin: ${UNIT} 0;
  }
`;

const InfoBox = styled.div`
  span {
    margin-left: 5px;
    font-weight: bold;
  }
`;

function BonusModal({ coins }:Props) {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => setIsOpen(false);

  return (
    <Modal
      onClose={onClose}
      open={isOpen}
    >
      <WrapperBox>
        <h3>
          Поздравляем!
        </h3>

        <img src={money} alt="money" />

        <InfoBox>
          Вам начислено
          <span>{`${coins} D`}</span>
        </InfoBox>
      </WrapperBox>
    </Modal>
  );
}

export default BonusModal;
