import React from 'react';
import styled from '@emotion/styled';
import { UNIT2 } from 'mytheme/theme';
import Bannner from './Banner';
import Lessons from './Lessons';

const HomeBox = styled.div`
  > div:not(:last-of-type) {
    margin-bottom: ${UNIT2};
  }
`;

function Home() {
  return (
    <HomeBox>
      <div>
        <Bannner />
      </div>

      <div>
        <Lessons />
      </div>
    </HomeBox>
  );
}

export default Home;
