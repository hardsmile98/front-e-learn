import React from 'react';
import styled from '@emotion/styled';
import { COLORS, UNIT, UNIT2 } from 'mytheme/theme';

const BannnerBox = styled.div`
  padding: ${UNIT2};
  background-color: ${COLORS.BG_HOVER};
  border-radius: ${UNIT};
`;

const InfoBox = styled.div`
  div {
    margin-top: ${UNIT};
    color: ${COLORS.SECONDARY};
  }
`;

function Bannner() {
  return (
    <BannnerBox>
      <InfoBox>
        <h2>
          Добро пожаловать, Денис
        </h2>
        <div>
          Изучаем английский вместе
        </div>
      </InfoBox>
    </BannnerBox>
  );
}

export default Bannner;
