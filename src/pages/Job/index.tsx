import React from 'react';
import styled from '@emotion/styled';
import Back from 'components/UI/Back';
import Detail from './Detail';

const JobBox = styled.div`
  margin-bottom: 20px;
`;
const DetailBox = styled.div`
  margin: 15px 0 20px;
`;

function JobPage() {
  return (
    <JobBox>
      <Back to="/" text="Вернуться назад" />

      <DetailBox>
        <Detail />
      </DetailBox>

      <div>
        Рекомендации
      </div>
    </JobBox>
  );
}

export default JobPage;
