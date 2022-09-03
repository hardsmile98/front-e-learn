import React from 'react';
import styled from '@emotion/styled';
import { UNIT2 } from 'mytheme/theme';
import Profile from './Profile';
import Statistics from './Statistics';

const SidebarBox = styled.div`
  height: 100%;
  padding: ${UNIT2};
  > div:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

function Sidebar() {
  return (
    <SidebarBox>
      <div>
        <Profile />
      </div>

      <div>
        <Statistics />
      </div>
    </SidebarBox>
  );
}

export default Sidebar;
