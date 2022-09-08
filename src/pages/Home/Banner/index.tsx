import React from 'react';
import styled from '@emotion/styled';
import { COLORS, UNIT, UNIT2 } from 'mytheme/theme';
import { publicApi } from 'api/publicApi';

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
  const { data } = publicApi.endpoints.profileInfo.useQueryState({});
  const { name } = data || {};

  return (
    <BannnerBox>
      <InfoBox>
        <h2>
          {`Добро пожаловать, ${name}`}
        </h2>
        <div>
          Изучаем английский вместе
        </div>
      </InfoBox>
    </BannnerBox>
  );
}

export default Bannner;
