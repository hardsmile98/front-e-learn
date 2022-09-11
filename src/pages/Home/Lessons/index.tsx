import React from 'react';
import { useGetCoursesQuery } from 'api/publicApi';
import styled from '@emotion/styled';
import { UNIT, COLORS } from 'mytheme/theme';
import { ICourse } from 'models';
import Loader from 'components/Loader';
import Lesson from './Lesson';

const LessonsBox = styled.div`
  margin-top: ${UNIT};
`;

const EmptyBox = styled.div`
  margin-top: ${UNIT};
  color: ${COLORS.SECONDARY};
`;

function Lessons() {
  const { data: courses = [], isLoading } = useGetCoursesQuery({});

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h4>
        Доступные курсы
      </h4>

      {courses.length
        ? courses.map((course: ICourse) => {
          const { id, name, progress } = course;
          return (
            <LessonsBox key={id}>
              <Lesson
                id={id}
                name={name}
                progressValue={progress.value}
                progressRange={progress.all}
              />
            </LessonsBox>
          );
        })
        : (
          <EmptyBox>
            Нет доступных курсов
          </EmptyBox>
        )}
    </div>
  );
}

export default Lessons;
