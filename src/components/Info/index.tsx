import React from 'react';
import styled from '@emotion/styled';
import ProfileInfo from './ProfileInfo';
import Subscribe from './Subscribe';
import Banner from './Banner';

const InfoBox = styled.div`
  width: 220px;
  height: 100%;
`;

const WidgetBox = styled.div`
  margin-bottom: 20px;
`;

function Infobar() {
  return (
    <InfoBox>
      <WidgetBox>
        <ProfileInfo />
      </WidgetBox>

      <WidgetBox>
        <Subscribe />
      </WidgetBox>

      <div>
        <Banner />
      </div>
    </InfoBox>
  );
}

export default Infobar;
