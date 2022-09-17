import React from 'react';
import styled from '@emotion/styled';
import {
  COLORS, FONTS, RADIUS, UNIT, UNIT2,
} from 'mytheme/theme';

type Props = {
  words: Array<string>,
  translate: string,
  answer: number,
  makeAnswer: any,
  selectAnswer: number | null,
};

const TitleBox = styled.div`
  color: ${COLORS.SECONDARY};
  margin-bottom: 5px;
`;

const TranslateBox = styled.div`
  font-size: 30px;
`;

const SelectBox = styled.div`
  margin-top: ${UNIT};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const RightBox = styled.div`
  margin-top: ${UNIT};
  color: ${COLORS.SECONDARY};
  span {
    margin-left: 5px;
    color: ${COLORS.WHITE};
  }
`;

interface IWordBox {
  isRight: boolean,
  isWrong: boolean,
}

const WordBox = styled.div<IWordBox>`
  width: calc(50% - 4px);
  border: 1px solid ${COLORS.BORDER};
  border-color: ${(props) => (props.isRight ? COLORS.SUCCESS : undefined)};
  border-color: ${(props) => (props.isWrong ? COLORS.ERROR : undefined)};
  padding: ${UNIT2};
  margin-top: ${UNIT};
  border-radius: ${UNIT};
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s all ease;
  :hover{
    border-color: ${(props) => (props.isRight || props.isWrong ? undefined : COLORS.GREY)};
  }
  
  span {
    margin-right: ${UNIT2};
    font-size: ${FONTS.input};
    background-color: ${COLORS.WHITE};
    font-weight: 500;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: ${RADIUS};
    display: inline-block;
    color: ${COLORS.BG};
  }
`;

function RepeatWord({
  words, translate, answer, makeAnswer, selectAnswer,
}: Props) {
  return (
    <div>
      <TitleBox>
        Выбери правильный ответ
      </TitleBox>

      <TranslateBox>
        {translate}
      </TranslateBox>

      <SelectBox>
        {words.map((word, index) => (
          <WordBox
            onClick={() => {
              if (selectAnswer === null) {
                makeAnswer(index);
              }
            }}
            isRight={selectAnswer === index && selectAnswer === answer}
            isWrong={selectAnswer === index && selectAnswer !== answer}
          >
            <span>
              {index + 1}
            </span>
            {word}
          </WordBox>
        ))}
      </SelectBox>

      {selectAnswer !== null && selectAnswer !== answer && (
        <RightBox>
          Правильный ответ:
          <span>{words[answer]}</span>
        </RightBox>
      )}
    </div>
  );
}

export default RepeatWord;
