import styled from '@emotion/styled';
import {
  COLORS, FONTS, RADIUS, UNIT, UNIT2,
} from 'mytheme/theme';

export const LearnBox = styled.div`
  padding: ${UNIT2};
  border-radius: ${UNIT};
  background-color: ${COLORS.BG_HOVER};
`;

export const ProgressBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CountMoneyBox = styled.div`
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

export const ContentBox = styled.div`
  margin: ${UNIT2} 0;
`;

export const Button = styled.button`
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
  :disabled{
    cursor: not-allowed;
    background: ${COLORS.DISABLE};
    color: ${COLORS.SECONDARY};
  }
`;
