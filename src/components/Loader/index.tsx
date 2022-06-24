import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';

const LoaderBox = styled.main`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid ${COLORS.WHITE};
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${COLORS.WHITE} transparent transparent transparent;
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

function Loader() {
  return (
    <LoaderBox>
      <div />
      <div />
      <div />
      <div />
    </LoaderBox>
  );
}

export default Loader;
