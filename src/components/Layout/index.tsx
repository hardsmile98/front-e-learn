import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

type Props = {
  children: React.ReactNode,
};

const LayoutBox = styled.div`
    display: flex;
    height: 100%;
`;

const MainBox = styled.div`
    flex-grow: 1;
    border-left: 1px solid ${COLORS.BG_HOVER};
    border-right: 1px solid ${COLORS.BG_HOVER};
`;

const NavBox = styled.div`
    width: 240px;
`;

const SideBox = styled.div`
    width: 300px;
`;

function Layout({ children }: Props) {
  return (
    <LayoutBox>
      <NavBox>
        <Navbar />
      </NavBox>

      <MainBox>
        {children}
      </MainBox>

      <SideBox>
        <Sidebar />
      </SideBox>
    </LayoutBox>
  );
}

export default Layout;
