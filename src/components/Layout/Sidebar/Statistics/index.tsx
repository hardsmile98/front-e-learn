import React from 'react';
import styled from '@emotion/styled';
import {
  COLORS, FONTS, UNIT, UNIT2,
} from 'mytheme/theme';
import { MdOutlineStarPurple500 as StarIcon } from 'react-icons/md';
import ProgressBar from 'components/UI/ProgressBar';
import Calendar from 'components/UI/Calendar';
import { publicApi } from 'api/publicApi';

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
  const { data } = publicApi.endpoints.profileInfo.useQueryState({});
  const { level, visit } = data || {};

  return (
    <StatisticsBox>
      <div>
        <LevelBox>
          <StarIcon />
          {`Уровень ${level.value}`}
        </LevelBox>

        <ProgressBox>
          <ProgressBar
            value={level.count}
            range={level.all}
          />
        </ProgressBox>

        <CountBox>
          {`${level.count} / ${level.all}`}
        </CountBox>
      </div>

      <div>
        <Calendar progressOfDays={visit} />
      </div>
    </StatisticsBox>
  );
}

export default Statistics;
