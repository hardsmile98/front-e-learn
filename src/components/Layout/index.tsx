import React from 'react';
import styled from '@emotion/styled';
import { COLORS, POINTS } from 'mytheme/theme';
import Infobar from '../Info';
import Sidebar from '../Sidebar';

type LayoutProps = {
  children: React.ReactNode
};

const MainBox = styled.main`
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.BG};
  min-height: 100vh;
  padding: 0 20px;
  
  @media (max-width: ${POINTS.md}) {
    flex-direction: column;
  }
`;

const ContentBox = styled.div`
  flex-grow: 1;
  padding: 20px 20px 0 20px;
  height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
  @media (max-width: ${POINTS.md}) {
    height: auto;
    padding: 0;
  }
`;

const SideBox = styled.div`
  padding: 20px 0;
`;

const InfoBox = styled.div`
  padding: 20px 0;

  @media (max-width: ${POINTS.lg}) {
    display: none;
  }
`;

function Layout({ children }: LayoutProps) {
  return (
    <MainBox>
      <SideBox>
        <Sidebar />
      </SideBox>

      <ContentBox>
        {children}
      </ContentBox>

      <InfoBox>
        <Infobar />
      </InfoBox>
    </MainBox>
  );
}

export default Layout;
