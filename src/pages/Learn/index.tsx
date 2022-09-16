import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from 'components/UI/ProgressBar';
import lesson from 'assets/imgs/lesson.svg';
import { MdNavigateNext as Next } from 'react-icons/md';
// import LearnWord from './LearnWord';
import { useGetLearnWordsQuery } from 'api/publicApi';
import PageLoader from 'components/PageLoader';
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

  const [countMoney, setCountMoney] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  console.log(setCountMoney, setCurrentWordIndex, setAnswer);

  const { data, isLoading } = useGetLearnWordsQuery({ id }, {});
  console.log(data);

  const next = () => {
    setCurrentWordIndex((prev) => prev + 1);
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
          value={currentWordIndex + 1}
          range={10}
        />

        <CountMoneyBox>
          {countMoney}
          <img src={lesson} alt="money" />
        </CountMoneyBox>
      </ProgressBox>

      <ContentBox>
        {/* <LearnWord
          word="lesson"
          translate="урок"
        /> */}

        <RepeatWord
          words={['money', 'word', 'repeat', 'job']}
          translate="деньги"
          answer={0}
        />
      </ContentBox>

      <Button
        onClick={next}
        type="button"
        disabled={!answer}
      >
        Далее
        <Next />
      </Button>
    </LearnBox>
  );
}

export default Learn;
