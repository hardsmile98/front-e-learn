import React from 'react';
import styled from '@emotion/styled';
import { COLORS, FONTS } from 'mytheme/theme';

const BagesBox = styled.div`
  display: flex;
  div {
    margin-right: 6px;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: ${FONTS.small};
    border: 1px solid ${COLORS.PRIMARY};
    :last-child {
      margin-right: 0px;
    }
  }
`;

type Props = {
  bages: Array<string>
};

function Bages({ bages } : Props) {
  return (
    <BagesBox>
      {bages.map((bage) => (
        <div key={bage}>
          {bage}
        </div>
      ))}
    </BagesBox>
  );
}

export default Bages;
