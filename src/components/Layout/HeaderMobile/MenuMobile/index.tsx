import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import {
  MdDehaze as BurgerIcon,
  MdClose as CloseIcon,
} from 'react-icons/md';
import { COLORS, UNIT } from 'mytheme/theme';
import Menu from 'components/Layout/Navbar/Menu';
import { useOnClickOutside } from 'hooks';

const ButtonOpenMenu = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background: inherit;
  color: ${COLORS.WHITE};
  font-size: 1.6rem;
`;

const MenuMobileBox = styled.div`
  position: relative;
`;

const MenuList = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  min-width: 240px;
  background: ${COLORS.WHITE};
  padding: ${UNIT};
  border-radius: ${UNIT};
`;

function MenuMobile() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <MenuMobileBox>
      <ButtonOpenMenu
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <CloseIcon /> : <BurgerIcon />}
      </ButtonOpenMenu>

      {isOpen && (
        <MenuList ref={ref}>
          <Menu onClickItem={() => setIsOpen(false)} />
        </MenuList>
      )}
    </MenuMobileBox>
  );
}

export default MenuMobile;
