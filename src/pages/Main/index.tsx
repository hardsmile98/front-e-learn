import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';
import { IJob } from 'models/job';
import declOfNum from 'utils/declOfNum';
import Filter from './Filter';
import Item from './Item';
import jobs from './jobs.json';

const TextBox = styled.div`
  border-bottom: 1px solid ${COLORS.GREY};
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

const CardsBox = styled.div`
  margin-top: 20px;
`;

function Main() {
  const countJobs = jobs.length;

  return (
    <div>
      <Filter />

      <CardsBox>
        <TextBox>
          <h2>
            {`${countJobs} ${declOfNum(countJobs, ['предложение', 'предложения', 'предложений'])}`}
          </h2>
        </TextBox>

        <div>
          {jobs.map((job: IJob) => <Item job={job} />)}
        </div>
      </CardsBox>
    </div>
  );
}

export default Main;
