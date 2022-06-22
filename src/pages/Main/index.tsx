import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';
import { IJob } from 'models/job';
import declOfNum from 'utils/declOfNum';
import { useGetAllJobsQuery } from 'api/publicApi';
import Loader from 'components/Loader';
import Filter from './Filter';
import Item from './Item';

const TextBox = styled.div`
  border-bottom: 1px solid ${COLORS.GREY};
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

const CardsBox = styled.div`
  margin-top: 20px;
`;

function Main() {
  const { data: jobs, isLoading } = useGetAllJobsQuery();
  const countJobs = jobs?.length || 0;

  return (
    <div>
      <Filter />

      <CardsBox>
        <TextBox>
          <h2>
            {`${countJobs} 
            ${declOfNum(countJobs, ['предложение', 'предложения', 'предложений'])}`}
          </h2>
        </TextBox>

        {isLoading
          ? <Loader />
          : (
            <div>
              {jobs?.length
                ? jobs?.map((job: IJob) => <Item key={job.id} job={job} />)
                : <p>Нет предложений по работе</p>}
            </div>
          )}
      </CardsBox>
    </div>
  );
}

export default Main;
