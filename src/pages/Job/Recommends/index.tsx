import React from 'react';
import styled from '@emotion/styled';
import Section from 'components/UI/Section';
import { Link } from 'react-router-dom';
import { COLORS, FONTS } from 'mytheme/theme';

const RecommendsBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  a {
    display: flex;
    width: calc(33% - 5px);
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${COLORS.GREY};
    font-size: ${FONTS.small};
    :hover{
        border-color: ${COLORS.PRIMARY};
    }
  }
`;

const ImgBox = styled.div`
  margin-right: 8px;
  img {
    border-radius: 10px;
    width: 42px;
    height: 42px;
    object-fit: cover;
  }
`;

function Recommends() {
  const remommends = [
    {
      id: 6,
      title: 'Backend Developer',
      img: 'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png',
      company: 'Jira',
      salary: '80k+',
    },
    {
      id: 12,
      title: 'Frontend Developer',
      img: 'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png',
      company: 'Extequte',
      salary: '100k-140k',
    },
    {
      id: 42,
      title: 'Manager',
      img: 'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png',
      company: 'NSHG',
      salary: '70k+',
    }];

  return (
    <Section>
      <h4>Рекомендации</h4>

      <RecommendsBox>
        {remommends.map((rec) => (
          <Link key={rec.id} to={`/job/${rec.id}`}>
            <ImgBox>
              <img src={rec.img} alt={rec.company} />
            </ImgBox>

            <div>
              <p>
                <b>{rec.company}</b>
              </p>
              <p>
                {rec.title}
              </p>
              <p>
                <b>Зарплата: </b>
                {rec.salary}
              </p>
            </div>
          </Link>
        ))}
      </RecommendsBox>
    </Section>
  );
}

export default Recommends;
