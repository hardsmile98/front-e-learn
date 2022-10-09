import React from 'react';
import styled from '@emotion/styled';
import { COLORS, UNIT2 } from 'mytheme/theme';
import { useIsMobile } from 'hooks';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import HeaderMobile from './HeaderMobile';

type Props = {
  children: React.ReactNode,
};

interface ILayout {
  isMobile: boolean,
}

const LayoutBox = styled.div<ILayout>`
    display: flex;
    height: 100%;
    overflow: hidden;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};;
`;

const MainBox = styled.div`
    padding: ${UNIT2};
    flex-grow: 1;
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
    border-right: 1px solid ${COLORS.BG_HOVER};
`;

const SideBox = styled.div`
    width: 300px;
    padding: ${UNIT2};
    border-left: 1px solid ${COLORS.BG_HOVER};
`;

function Layout({ children }: Props) {
  const isMobile = useIsMobile();

  return (
    <LayoutBox isMobile={isMobile}>
      {!isMobile && (
        <NavBox>
          <Navbar />
        </NavBox>
      )}

      {isMobile && (
        <HeaderMobile />
      )}

      <MainBox>
        {children}
      </MainBox>

      {!isMobile && (
        <SideBox>
          <Sidebar />
        </SideBox>
      )}
    </LayoutBox>
  );
}

export default Layout;
