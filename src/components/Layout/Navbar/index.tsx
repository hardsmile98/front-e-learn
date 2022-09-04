import React from 'react';
import styled from '@emotion/styled';
import { COLORS, FONTS, UNIT2 } from 'mytheme/theme';
import Menu from './Menu';
import Progress from './Progress';

const NavbarBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuBox = styled.div`
  margin-bottom: ${UNIT2};
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  > div {
    font-weight: bold;
  }

  > p {
    font-size: ${FONTS.small};
    color: ${COLORS.SECONDARY}
  }
`;

function Navbar() {
  return (
    <NavbarBox>
      <MenuBox>
        <NameBox>
          <div>
            E-LERN
          </div>
          <p>
            Изучай английский
          </p>
        </NameBox>

        <Menu />
      </MenuBox>

      <Progress />
    </NavbarBox>
  );
}

export default Navbar;
