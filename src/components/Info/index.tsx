import React from 'react';
import styled from '@emotion/styled';
import useAuth from 'hooks/useAuth';
import Banner from './Banner';
import Widgets from './Widgets';

const InfoBox = styled.div`
  width: 220px;
  height: 100%;
`;

function Infobar() {
  const { isAuth } = useAuth();

  return (
    <InfoBox>
      {isAuth && <Widgets />}

      <Banner />
    </InfoBox>
  );
}

export default Infobar;
