import React from 'react';
import styled from '@emotion/styled';
import { COLORS, FONTS } from 'mytheme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { IJob } from 'models/job';
import { Link } from 'react-router-dom';

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
  margin: 10px 0;
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

const BagesBox = styled.div`
  display: flex;
  div {
    margin-right: 6px;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: ${FONTS.small};
    border: 1px solid ${COLORS.PRIMARY};
  }
`;

const Button = styled.button`
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
  job: IJob
};

function Item({ job }: Props) {
  return (
    <ItemBox>
      <ImgBox>
        <img src={job.img} alt="" />
      </ImgBox>

      <ContentBox>
        <LineBox>
          <NameBox>
            <p>{job.name}</p>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              {job.countResponse}
            </div>
          </NameBox>

          <div>
            {job.createAt}
          </div>
        </LineBox>

        <PositionBox>
          <Link to={`job/${String(job.id)}`}>
            <h4>
              {job.position}
            </h4>
          </Link>
        </PositionBox>

        <LineBox>
          <BagesBox>
            <div>
              {job.salary}
            </div>
            <div>
              {job.employment}
            </div>
            <div>
              {job.type}
            </div>
          </BagesBox>

          <Button type="button">
            Откликнуться
          </Button>
        </LineBox>
      </ContentBox>
    </ItemBox>
  );
}

export default Item;
