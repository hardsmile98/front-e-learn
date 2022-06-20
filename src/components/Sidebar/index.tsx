import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { COLORS } from 'mytheme/theme';
import ROUTES from 'constants/routes';

const SidebarBox = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;
`;

const LogoNameBox = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 700;
`;

const LogoDescBox = styled.div`
  font-size: 11px;
`;

const LogoutBox = styled.div`
  font-weight: 500;
  padding: 0 30px;
  text-transform: uppercase;
  cursor: pointer;
  svg{
    margin-right: 5px;
  }
`;

const MenuBox = styled.ul`
  margin-top: 100px;
`;

const LinkBox = styled.li`
  a {
    padding: 10px 30px;
    display: block;
    border-radius: 10px;
    :hover{
      background: ${COLORS.PRIMARY};
      color: white;
    }
    svg{
      margin-right: 5px;
    }
  }
`;

function Sidebar() {
  return (
    <SidebarBox>
      <div>
        <Link to="/">
          <LogoNameBox>
            REMOTELY.
          </LogoNameBox>
          <LogoDescBox>
            Ищи работу с нами
          </LogoDescBox>
        </Link>

        <MenuBox>
          {ROUTES.map((route) => (
            <LinkBox key={route.name}>
              <Link to={route.path}>
                <FontAwesomeIcon icon={route.icon} />
                {route.name}
              </Link>
            </LinkBox>
          ))}
        </MenuBox>
      </div>

      <LogoutBox>
        <FontAwesomeIcon
          icon={faShareFromSquare}
        />
        Выход
      </LogoutBox>
    </SidebarBox>
  );
}

export default Sidebar;
