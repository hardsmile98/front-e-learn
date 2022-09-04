import React from 'react';
import styled from '@emotion/styled';
import ProgressBar from 'components/UI/ProgressBar';
import {
  COLORS, FONTS, RADIUS, UNIT, UNIT2,
} from 'mytheme/theme';
import lesson from 'assets/imgs/lesson.svg';
import { MdNavigateNext as Next } from 'react-icons/md';
// import LearnWord from './LearnWord';
import RepeatWord from './RepeatWord';

const LearnBox = styled.div`
  padding: ${UNIT2};
  border-radius: ${UNIT};
  background-color: ${COLORS.BG_HOVER};
`;

const ProgressBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CountMoneyBox = styled.div`
  margin-left: ${UNIT};
  padding: 0 ${UNIT2};
  height: 30px;
  line-height: 30px;
  border-radius: ${RADIUS};
  background-color: ${COLORS.BG};
  display: flex;
  align-items: center;
  img {
    margin-left: 6px;
    width: 18px;
    height: 18px;
  }
`;

const ContentBox = styled.div`
  margin: ${UNIT2} 0;
`;

const Button = styled.button`
  text-transform: uppercase;
  font-size: ${FONTS.small};
  border-radius: ${RADIUS};
  padding: 12px 30px;
  border-bottom: 3px solid ${COLORS.SECONDARY};
  display: flex;
  align-items: center;
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

function Learn() {
  return (
    <LearnBox>
      <ProgressBox>
        <ProgressBar
          height={30}
          value={1}
          range={12}
        />

        <CountMoneyBox>
          {0}
          <img src={lesson} alt="money" />
        </CountMoneyBox>
      </ProgressBox>

      <ContentBox>
        {/* <LearnWord
          word="lesson"
          translate="урок"
        /> */}

        <RepeatWord
          words={['money', 'word', 'repeat', 'job']}
          translate="деньги"
          answer={0}
        />
      </ContentBox>

      <Button type="button">
        Далее
        <Next />
      </Button>
    </LearnBox>
  );
}

export default Learn;
