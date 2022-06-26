import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { COLORS, FONTS } from 'mytheme/theme';
import { Link } from 'react-router-dom';
import { useGetProfileQuery } from 'api/publicApi';

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  img {
    border-radius: 10px;
    width: 70px;
    height: 80px;
    object-fit: cover;
  }
  a {
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    top: 0;
    right: 40px;
    color: ${COLORS.GREY};
    :hover{
      color: inherit;
    }
  }
`;

const TextBox = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const PositionBox = styled.div`
  margin-top: 5px;
  font-size: ${FONTS.small};
  color: ${COLORS.GREY};
`;

function ProfileInfo() {
  const { data } = useGetProfileQuery();
  const name = `${data?.name} ${data?.surname}`;

  return (
    <div>
      <ImgBox>
        <img src={data?.img} alt={name} />
        <Link to="/profile">
          <FontAwesomeIcon icon={faBell} />
        </Link>
      </ImgBox>

      <TextBox>
        <p>
          {name}
        </p>
        <PositionBox>
          {data?.position}
        </PositionBox>
      </TextBox>
    </div>
  );
}

export default ProfileInfo;
