import React from 'react';
import styled from '@emotion/styled';
import Section from 'components/UI/Section';
import { Link } from 'react-router-dom';
import { COLORS, FONTS } from 'mytheme/theme';
import { useGetRecommendsQuery } from 'api/publicApi';
import Loader from 'components/Loader';

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
  const { data: remommends, isLoading } = useGetRecommendsQuery();

  return (
    <Section>
      <h4>Рекомендации</h4>

      {isLoading
        ? <Loader color="primary" />
        : (
          <RecommendsBox>
            {(remommends || []).map(({
              id, img, name, position, salary,
            }) => (
              <Link key={id} to={`/job/${id}`}>
                <ImgBox>
                  <img src={img} alt={name} />
                </ImgBox>

                <div>
                  <p>
                    <b>{name}</b>
                  </p>
                  <p>
                    {position}
                  </p>
                  <p>
                    <b>Зарплата: </b>
                    {salary}
                  </p>
                </div>
              </Link>
            ))}
          </RecommendsBox>
        )}

    </Section>
  );
}

export default Recommends;
