import React from 'react';
import styled from '@emotion/styled';
import {
  COLORS, FONTS, UNIT, UNIT2,
} from 'mytheme/theme';
import money from 'assets/imgs/money.svg';
import { useProfileInfoQuery } from 'api/publicApi';

const ProgressBox = styled.div`
  background-color: ${COLORS.BG_HOVER};
  color: ${COLORS.SECONDARY};
  border: 1px solid ${COLORS.BORDER};
  padding: ${UNIT2};
  border-radius: ${UNIT};
  text-align: center;
  font-size: ${FONTS.small};

  img {
    width: 55px;
    height: 55px;
    margin: 10px 0;
  }
`;

const DescBox = styled.div`
  font-size: ${FONTS.bigSmall};
`;

const BalanceBox = styled.div`
  span {
    color: ${COLORS.WHITE};
    font-weight: 500;
  }
`;

function Progress() {
  const { data } = useProfileInfoQuery({});
  const { balance } = data || {};

  return (
    <ProgressBox>
      <DescBox>
        Изучай английский вместе и копи монеты!
      </DescBox>

      <img src={money} alt="money" />

      <BalanceBox>
        Ваш баланс:
        {' '}
        <span>{`${balance} D`}</span>
      </BalanceBox>
    </ProgressBox>
  );
}

export default Progress;
