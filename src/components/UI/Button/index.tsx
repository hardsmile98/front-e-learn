import React from 'react';
import styled from '@emotion/styled';
import { COLORS, FONTS } from 'mytheme/theme';

const ButtonBox = styled.button`
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
  font-size: ${FONTS.small};
  border-radius: 10px;
  font-weight: bold;
  padding: 10px 20px;
  :hover{
    background-color: ${COLORS.PRIMARY_HOVER};
  }
`;

type Props = {
  children: React.ReactNode;
  onClick: ()=> void,
};

function Button({ children, onClick }: Props) {
  return (
    <ButtonBox type="button" onClick={onClick}>
      {children}
    </ButtonBox>
  );
}

export default Button;
