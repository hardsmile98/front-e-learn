import React from 'react';
import { useGetCoursesQuery } from 'api/publicApi';
import styled from '@emotion/styled';
import { UNIT } from 'mytheme/theme';
import { ICourse } from 'models';
import Loader from 'components/Loader';
import Lesson from './Lesson';

const LessonsBox = styled.div`
  margin-top: ${UNIT};
`;

function Lessons() {
  const { data: courses, isLoading } = useGetCoursesQuery({});

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h4>
        Доступные курсы
      </h4>

      {(courses || []).map((course: ICourse) => {
        const { id, name, progress } = course;

        return (
          <LessonsBox>
            <Lesson
              key={id}
              id={id}
              name={name}
              progressValue={progress.value}
              progressRange={progress.all}
            />
          </LessonsBox>
        );
      })}
    </div>
  );
}

export default Lessons;
