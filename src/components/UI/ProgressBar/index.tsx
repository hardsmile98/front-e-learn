/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import { COLORS, RADIUS } from 'mytheme/theme';

type Props = {
  value: number,
  range: number,
  height?: number,
};

interface IProgress {
  height: number;
}

interface IBar {
  percent: number;
}

const ProgressBox = styled.div<IProgress>`
  display: block;
  width: 100%;
  height: ${(props) => `${props.height}px`};
  background-color: ${COLORS.BG};
  border-radius: ${RADIUS};
`;

const Bar = styled.div<IBar>`
  display: block;
  width: ${(props) => `${props.percent}%`};
  height: 100%;
  background-color: ${COLORS.PRIMARY};
  border-radius: ${RADIUS};
`;

function ProgressBar({ value, range, height = 5 }:Props) {
  const percent = value > range ? 100 : Math.round((value / range) * 100);

  return (
    <ProgressBox height={height}>
      <Bar percent={percent} />
    </ProgressBox>
  );
}

export default ProgressBar;
