import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { IJob } from 'models/job';
import { Link } from 'react-router-dom';
import Bages from 'components/Bages';
import Button from 'components/UI/Button';

const ItemBox = styled.div`
  background-color: ${COLORS.WHITE};
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  display: flex;
`;

const ImgBox = styled.div`
  width: 60px;
  height: 60px;
  img {
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ContentBox = styled.div`
  margin-left: 10px;
  flex-grow: 1;
`;

const LineBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PositionBox = styled.div`
  margin: 8px 0;
  a:hover {
    color: ${COLORS.PRIMARY};
  }
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 15px;
    svg{
      margin-right: 5px;
    }
  }
`;

type Props = {
  job: IJob
};

function Item({ job }: Props) {
  const {
    id, img, name, countResponse, createAt,
    position, salary, employment, type,
  } = job;

  return (
    <ItemBox>
      <ImgBox>
        <img src={img} alt={name} />
      </ImgBox>

      <ContentBox>
        <LineBox>
          <NameBox>
            <p>{name}</p>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              {countResponse}
            </div>
          </NameBox>

          <div>
            {createAt}
          </div>
        </LineBox>

        <PositionBox>
          <Link to={`job/${String(id)}`}>
            <h4>
              {position}
            </h4>
          </Link>
        </PositionBox>

        <LineBox>
          <Bages bages={[salary, employment, type]} />

          <Button onClick={() => {}}>
            Откликнуться
          </Button>
        </LineBox>
      </ContentBox>
    </ItemBox>
  );
}

export default Item;
