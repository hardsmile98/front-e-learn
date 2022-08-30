import styled from '@emotion/styled';

export default styled.div`
    &.enter {
    opacity: 0;
    transform: scale(0.9);
    }
    &.enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
    }
    &.exit {
    opacity: 1;
    }
    &.exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
    }
`;
