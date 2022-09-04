import React from 'react';
import styled from '@emotion/styled';
import {
  COLORS, FONTS, UNIT, UNIT2,
} from 'mytheme/theme';
import ProgressBar from 'components/UI/ProgressBar';
import { Link } from 'react-router-dom';
import lesson from 'assets/imgs/lesson.svg';

const LessonBox = styled.div`
  background-color: ${COLORS.BG_HOVER};
  padding: ${UNIT2};
  border-radius: ${UNIT};
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  img{
    width: 50px;
    height: 50px;
  }
`;

const InfoBox = styled.div`
  margin-left: ${UNIT2};
  flex-grow: 1;
`;

const NameBox = styled.div`
  margin-bottom: ${UNIT};
`;

const ProgressBox = styled.div`
  margin-top: ${UNIT};
  font-size: ${FONTS.small};
  color: ${COLORS.SECONDARY};
`;

const LinkBox = styled.div`
  margin-top: ${UNIT};
  a {
    color: ${COLORS.PRIMARY};
    transition: 0.2s all ease;
    :hover{
      color: ${COLORS.PRIMARY_HOVER};
    }
  }
`;

type Props = {
  id: string | number,
  name: string,
  progressValue: number,
  progressRange: number,
};

function Lesson({
  id, name, progressValue, progressRange,
} : Props) {
  return (
    <LessonBox>
      <Icon>
        <img src={lesson} alt="lesson" />
      </Icon>

      <InfoBox>
        <NameBox>
          {name}
        </NameBox>

        <ProgressBar
          value={progressValue}
          range={progressRange}
        />

        <ProgressBox>
          {`Прогресс: ${progressValue} / ${progressRange}`}
        </ProgressBox>

        <LinkBox>
          <Link to={`/learn/${id}`}>
            Изучать новые слова
          </Link>
        </LinkBox>
      </InfoBox>
    </LessonBox>
  );
}

export default Lesson;
