/* eslint-disable react/require-default-props */
import React from 'react';
import routes from 'constants/routes';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  COLORS, FONTS, UNIT, UNIT2,
} from 'mytheme/theme';
import {
  MdHome as HomeIcon,
  MdBookmarks as LearnIcon,
  MdLogout as LogoutIcon,
} from 'react-icons/md';

const ICONS = {
  home: <HomeIcon />,
  learn: <LearnIcon />,
  logout: <LogoutIcon />,
};

const MenuItem = styled.div`
  a {
    background-color: ${COLORS.BG_HOVER};
    padding: ${UNIT} ${UNIT2};
    width: 100%;
    font-size: ${FONTS.small};
    font-weight: 500;
    border-radius: ${UNIT};
    display: flex;
    align-items: center;
    & svg {
      margin-right: 5px;
      width: 1.1rem;
      height: 1.1rem;
    }
  }
  :not(:last-of-type) {
    margin-bottom: ${UNIT};
  }
`;

type Props = {
  onClickItem?: any,
};

function Menu({ onClickItem }:Props) {
  return (
    <ul>
      {routes.map(({ path, name, iconName }) => (
        <MenuItem key={path}>
          <Link to={path} onClick={onClickItem}>
            {ICONS[iconName]}
            {name}
          </Link>
        </MenuItem>
      ))}
    </ul>
  );
}

export default Menu;
