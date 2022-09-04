import React from 'react';
import styled from '@emotion/styled';
import {
  COLORS, FONTS, UNIT2,
} from 'mytheme/theme';

type Props = {
  word: string,
  translate: string,
};

const WordBox = styled.div`
  :not(:last-of-type){
    margin-bottom: ${UNIT2};
  }
`;

const TitleBox = styled.div`
  text-transform: uppercase;
  color: ${COLORS.SECONDARY};
  font-size: ${FONTS.small};
  margin-bottom: 5px;
`;

const ValueBox = styled.div`
  font-size: 30px;
`;

function LearnWord({ word, translate }:Props) {
  return (
    <>
      <WordBox>
        <TitleBox>
          Английский
        </TitleBox>

        <ValueBox>
          {word}
        </ValueBox>
      </WordBox>

      <WordBox>
        <TitleBox>
          Русский
        </TitleBox>

        <ValueBox>
          {translate}
        </ValueBox>
      </WordBox>
    </>
  );
}

export default LearnWord;
