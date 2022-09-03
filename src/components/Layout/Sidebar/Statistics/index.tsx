import React from 'react';
import styled from '@emotion/styled';
import {
  COLORS, FONTS, UNIT, UNIT2,
} from 'mytheme/theme';
import { MdOutlineStarPurple500 as StarIcon } from 'react-icons/md';
import ProgressBar from 'components/UI/ProgressBar';
import Calendar from 'components/UI/Calendar';

const StatisticsBox = styled.div`
  background-color: ${COLORS.BG_HOVER};
  border-radius: ${UNIT};
  padding: ${UNIT2};
  font-size: ${FONTS.small};
  border: 1px solid ${COLORS.BORDER};
  > div:not(:last-of-type) {
    margin-bottom: ${UNIT2};
  }
`;

const LevelBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

const CountBox = styled.div`
    color: ${COLORS.SECONDARY};
`;

const ProgressBox = styled.div`
    margin: 5px 0;
`;

function Statistics() {
  const progressOfDays = {
    Mo: false,
    Tu: false,
    We: true,
    Th: false,
    Fr: true,
    Sa: false,
    Su: false,
  };

  return (
    <StatisticsBox>
      <div>
        <LevelBox>
          <StarIcon />
          Уровень 1
        </LevelBox>

        <ProgressBox>
          <ProgressBar
            value={13}
            range={90}
          />
        </ProgressBox>

        <CountBox>
          13 / 90
        </CountBox>
      </div>

      <div>
        <Calendar progressOfDays={progressOfDays} />
      </div>
    </StatisticsBox>
  );
}

export default Statistics;
