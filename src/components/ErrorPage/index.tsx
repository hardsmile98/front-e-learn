/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import { UNIT } from 'mytheme/theme';

type Props = {
  title: string,
  error: string,
};

const ErrorPageBox = styled.div`
  h4 {
    margin-bottom: ${UNIT};
  }
`;

function ErrorPage({ error, title }:Props) {
  return (
    <ErrorPageBox>
      <h4>
        {title}
      </h4>

      <div>
        {error}
      </div>
    </ErrorPageBox>
  );
}

export default ErrorPage;
