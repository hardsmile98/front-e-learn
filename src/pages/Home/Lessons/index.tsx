import React from 'react';
import styled from '@emotion/styled';
import { UNIT } from 'mytheme/theme';
import Lesson from './Lesson';

const LessonsBox = styled.div`
  margin-top: ${UNIT};
`;

function Lessons() {
  return (
    <div>
      <h4>
        Доступные курсы
      </h4>

      <LessonsBox>
        <Lesson
          id={1}
          name="Курс №1 (Основы)"
          progressValue={43}
          progressRange={100}
        />
      </LessonsBox>
    </div>
  );
}

export default Lessons;
