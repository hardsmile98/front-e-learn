import React from 'react';
import styled from '@emotion/styled';
import { COLORS, UNIT2 } from 'mytheme/theme';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

type Props = {
  children: React.ReactNode,
};

const LayoutBox = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
`;

const MainBox = styled.div`
    padding: ${UNIT2};
    flex-grow: 1;
    border-left: 1px solid ${COLORS.BG_HOVER};
    border-right: 1px solid ${COLORS.BG_HOVER};
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${COLORS.BG_HOVER};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${COLORS.GREY};
    }
`;

const NavBox = styled.div`
    width: 240px;
    padding: ${UNIT2};
`;

const SideBox = styled.div`
    width: 300px;
    padding: ${UNIT2};
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
