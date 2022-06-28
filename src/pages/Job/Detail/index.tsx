import React from 'react';
import { useParams } from 'react-router-dom';
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
import { useGetJobQuery, useGetProfileQuery } from 'api/publicApi';
import Loader from 'components/Loader';

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
  const { id = '' } = useParams();

  const { isAuth } = useAuth();

  const { data: job, isLoading } = useGetJobQuery(id);
  const { data: profile } = useGetProfileQuery();

  const isSaved = !!profile?.savedJobs.includes(Number(id));

  if (isLoading) {
    return (
      <Section>
        <Loader color="primary" />
      </Section>
    );
  }

  if (!job) {
    return (
      <Section>
        Неверный запрос! Попробуйте снова.
      </Section>
    );
  }

  return (
    <Section>
      <HeadBox>
        <ImgBox>
          <img src={job?.img} alt={job?.name} />
        </ImgBox>

        <HeadContentBox>
          <LineBox>
            <h2>{job?.position}</h2>
            <div>{job?.createAt}</div>
          </LineBox>

          <p>Slack</p>

          <Bages
            bages={[
              job?.salary,
              job?.type,
              job?.employment,
            ]}
          />
        </HeadContentBox>
      </HeadBox>

      <ContentBox>
        <Markdown
          markdown={job?.markdown}
        />
      </ContentBox>

      {isAuth && (
        <ButtontBox>
          <Button onClick={() => {}}>
            Откликнуться
          </Button>

          <Button
            onClick={() => {}}
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
