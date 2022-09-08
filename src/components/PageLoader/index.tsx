/* eslint-disable react/require-default-props */
import Loader from 'components/Loader';
import React from 'react';
import styled from '@emotion/styled';
import { COLORS, FONTS, UNIT2 } from 'mytheme/theme';

type Props = {
  title?: string,
};

const PageLoaderBox = styled.div`
  background-color: ${COLORS.BG};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled.div`
  margin-top: ${UNIT2};
  font-size: ${FONTS.small};
  color: ${COLORS.SECONDARY};
`;

function PageLoader({ title }:Props) {
  return (
    <PageLoaderBox>
      <div>
        <Loader />
        <TitleBox>
          {title}
        </TitleBox>
      </div>
    </PageLoaderBox>
  );
}

export default PageLoader;
