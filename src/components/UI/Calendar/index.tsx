import React from 'react';
import styled from '@emotion/styled';
import { COLORS, UNIT, UNIT2 } from 'mytheme/theme';
import {
  MdCheckCircle as Check,
  MdCancel as Close,
} from 'react-icons/md';

type Props = {
  progressOfDays: {
    [key: string]: boolean
  }
};

interface IChecker {
  check: boolean;
}

interface IMap {
  [index: string]: string;
}

const MapWeekendDays: IMap = {
  Mo: 'Пн',
  Tu: 'Вт',
  We: 'Ср',
  Th: 'Чт',
  Fr: 'Пт',
  Sa: 'Сб',
  Su: 'Вс',
};

const CalendarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DayBox = styled.div`
  text-align: center;
  width: calc(100% / 7 - ${UNIT});
`;

const CheckerBox = styled.div<IChecker>`
    height: 40px;
    background-color: ${COLORS.BG};
    border-radius: ${UNIT2};
    margin-bottom: 5px;
    padding: 2px;
    display: flex;
    align-items: ${(props) => (props.check ? 'flex-start' : 'flex-end')};
    > svg {
        width: 100%;
        height: auto;
    }
`;

function Calendar({ progressOfDays } :Props) {
  const days = Object.keys(progressOfDays);

  return (
    <CalendarBox>
      {days.map((day: string) => (
        <DayBox key={day}>
          <CheckerBox check={progressOfDays[day]}>
            {progressOfDays[day] ? <Check /> : <Close />}
          </CheckerBox>
          {MapWeekendDays[day]}
        </DayBox>
      ))}
    </CalendarBox>
  );
}

export default Calendar;
