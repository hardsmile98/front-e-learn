import styled from '@emotion/styled';

export default styled.div`
    &.enter {
    opacity: 0;
    }
    &.enter-active {
    opacity: 1;
    transition: opacity 400ms;
    }
    &.exit {
    opacity: 1;
    }
    &.exit-active {
    opacity: 0;
    transition: opacity 400ms;
    }
`;
