import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProgressBar from 'components/UI/ProgressBar';
import lesson from 'assets/imgs/lesson.svg';
import { MdNavigateNext as Next } from 'react-icons/md';
import { useGetLearnWordsQuery } from 'api/publicApi';
import PageLoader from 'components/PageLoader';
import LearnWord from './LearnWord';
import RepeatWord from './RepeatWord';
import {
  LearnBox,
  ProgressBox,
  CountMoneyBox,
  ContentBox,
  Button,
} from './styles';

function Learn() {
  const { id = undefined } = useParams();
  const navigate = useNavigate();

  const [countMoney, setCountMoney] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);

  const { data, isLoading } = useGetLearnWordsQuery({ id }, {});

  const countWords = data?.words?.length || 0;
  const moneyForWord = data?.moneyForWord || 2;
  const currentWord = data?.words[currentIndex] || {};

  const makeAnswer = (value: number) => {
    if (value === currentWord.answer) {
      setCountMoney((prev) => prev + moneyForWord);
    }
    setAnswer(value);
  };

  const isDisableNext = currentWord.type === 'repeat' && answer === null;

  const isFinish = countWords - 1 !== currentIndex;

  const next = () => {
    setCurrentIndex((prev) => prev + 1);
    setAnswer(null);
  };

  const finish = () => {
    navigate('/');
  };

  if (isLoading) {
    return (
      <PageLoader
        title="Получаем слова..."
      />
    );
  }

  return (
    <LearnBox>
      <ProgressBox>
        <ProgressBar
          height={30}
          value={currentIndex + 1}
          range={countWords}
        />

        <CountMoneyBox>
          {countMoney}
          <img src={lesson} alt="money" />
        </CountMoneyBox>
      </ProgressBox>

      <ContentBox>
        {currentWord.type === 'learn' ? (
          <LearnWord
            word={currentWord.word}
            translate={currentWord.translate}
          />
        ) : (
          <RepeatWord
            words={currentWord.words}
            translate={currentWord.translate}
            answer={currentWord.answer}
            makeAnswer={makeAnswer}
            selectAnswer={answer}
          />
        )}
      </ContentBox>

      {isFinish ? (
        <Button
          onClick={next}
          type="button"
          disabled={isDisableNext}
        >
          Далее
          <Next />
        </Button>
      ) : (
        <Button
          onClick={finish}
          type="button"
          disabled={isDisableNext}
        >
          Завершить
          <Next />
        </Button>
      )}
    </LearnBox>
  );
}

export default Learn;
