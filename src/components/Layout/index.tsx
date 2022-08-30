import React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: any,
};

const LayoutBox = styled.div`
    display: flex;
    height: 100%;
`;

const MainBox = styled.div`
    flex-grow: 1;
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
        navigation
      </NavBox>

      <MainBox>
        {children}
      </MainBox>

      <SideBox>
        sidebar
      </SideBox>
    </LayoutBox>
  );
}

export default Layout;
