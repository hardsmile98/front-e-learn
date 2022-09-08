/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';

type Props = {
  color?: 'primary' | 'white'
};

const LoaderBox = styled.main<Props>`
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      margin: 8px;
      border: 
        ${(props) => (props.color === 'white' ? `6px solid ${COLORS.WHITE}` : `6px solid ${COLORS.PRIMARY}`)};
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: ${(props) => (props.color === 'white'
    ? `${COLORS.WHITE} transparent transparent transparent`
    : `${COLORS.PRIMARY} transparent transparent transparent`)};
    }

    div:nth-of-type(1) {
        animation-delay: -0.45s;
    }

    div:nth-of-type(2) {
        animation-delay: -0.3s;
    }

    div:nth-of-type(3) {
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

function Loader({ color = 'white' }: Props) {
  return (
    <LoaderBox color={color}>
      <div />
      <div />
      <div />
      <div />
    </LoaderBox>
  );
}

export default Loader;
