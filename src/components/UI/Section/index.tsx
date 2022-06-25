import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';

const SectionBox = styled.div`
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  padding: 20px;
`;

type Props = {
  children: React.ReactNode;
};

function Section({ children }: Props) {
  return (
    <SectionBox>
      {children}
    </SectionBox>
  );
}

export default Section;
