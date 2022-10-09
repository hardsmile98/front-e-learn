import React from 'react';
import styled from '@emotion/styled';
import { COLORS, FONTS, UNIT2 } from 'mytheme/theme';
import MenuMobile from './MenuMobile';

const HeaderMobileBox = styled.div`
  padding: ${UNIT2};
  border-bottom: 1px solid ${COLORS.BG_HOVER};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    font-weight: bold;
  }

  > p {
    font-size: ${FONTS.small};
    color: ${COLORS.SECONDARY}
  }
`;

function HeaderMobile() {
  return (
    <HeaderMobileBox>
      <NameBox>
        <div>
          E-LERN
        </div>
        <p>
          Изучай английский
        </p>
      </NameBox>

      <MenuMobile />
    </HeaderMobileBox>
  );
}

export default HeaderMobile;
