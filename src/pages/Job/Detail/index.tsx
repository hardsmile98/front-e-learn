import React, { useState } from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';
import Bages from 'components/Bages';
import Markdown from 'components/Markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHearRegular } from '@fortawesome/free-regular-svg-icons';
import Section from 'components/UI/Section';
import Button from 'components/UI/Button';
import useAuth from 'hooks/useAuth';

const LineBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const HeadBox = styled.div`
  display: flex;
`;

const HeadContentBox = styled.div`
  flex-grow: 1;
  margin-left: 10px;
  p {
    margin-bottom: 8px;
  }
`;

const ImgBox = styled.div`
  width: 85px;
  height: 85px;
  img {
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ContentBox = styled.div`
  margin-top: 15px;
`;

const ButtontBox = styled.div`
  border-top: 1px solid ${COLORS.GREY};
  padding-top: 15px;
  display: flex;
  button {
    margin-right: 10px;
  }
`;

function Detail() {
  const { isAuth } = useAuth();
  const [isSaved, setIsSaved] = useState(false);

  const markdown = `Компания **Slack** 18 лет на рынке IT разработок и
  предоставляет только надежные, масштабируемые и эффективные
  программные решения. Наше направление – крупные проекты
  федерального и корпоративного уровня в финтех, ритейле,
  медицине, образовании и других сферах как в России, так и за рубежом.

  Мы продолжаем развиваться и расширять бизнес и приглашаем
  в нашу команду Frontend- разработчиков различных уровней
  c опытом программирования уровня **Middle** и выше для удаленной
  работы или в офисе компании.
  
  Вы нам подходите, если владеете большинством из перечисленных технологий:
  - React
  - Redux или MobX
  - JavaScript, TypeScript
  - REST или GraphQL
  - HTML5 и CSS3
  - Отличные навыки адаптивной и кросс-браузерной верстки
  - Material UI или Ant Design или аналог

  Для наших сотрудников мы предлагаем:
  - конкурентный уровень заработной платы
  (определяется по результатам собеседования), регулярную индексацию;
  - удаленный формат работы или в комфортном тульском офисе;
  - возможность обучения, сертификации и участия в конференциях за счет компании;
  - быстрое профессиональное развитие, рост экспертизы;
  - взаимодействие по ТК РФ или как с ИП;
  - активную корпоративную жизнь, разнообразные льготы и компенсации.

  Ждем Вас в нашей команде!`;

  return (
    <Section>
      <HeadBox>
        <ImgBox>
          <img src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png" alt="slack" />
        </ImgBox>

        <HeadContentBox>
          <LineBox>
            <h2>Frontend Developer</h2>
            <div>14.06.2022</div>
          </LineBox>

          <p>Slack</p>

          <Bages bages={['80k+', 'full-time', 'офис']} />
        </HeadContentBox>
      </HeadBox>

      <ContentBox>
        <Markdown markdown={markdown} />
      </ContentBox>

      {isAuth && (
        <ButtontBox>
          <Button onClick={() => {}}>
            Откликнуться
          </Button>

          <Button
            onClick={() => setIsSaved((prev) => !prev)}
            variant={isSaved ? 'fill' : 'outlined'}
          >
            <FontAwesomeIcon
              icon={isSaved ? faHeart : faHearRegular}
              style={{ marginRight: '5px' }}
            />
            {isSaved ? 'Убрать' : 'Сохранить'}
          </Button>
        </ButtontBox>
      )}
    </Section>
  );
}

export default Detail;
