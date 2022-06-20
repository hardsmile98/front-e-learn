import React from 'react';
import styled from '@emotion/styled';
import { COLORS, FONTS } from 'mytheme/theme';
import banner from 'assets/imgs/banner.jpg';

const BannerBox = styled.div`
    img{
        width: 100%;
    }
  background: ${COLORS.WHITE};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;
`;

const TextBox = styled.div`
  margin-top: 10px;
  text-align: center;
  p {
    font-size: ${FONTS.small};
  }
`;

function Banner() {
  return (
    <BannerBox>
      <img src={banner} alt="" />

      <TextBox>
        <h4>
          REMOTELY.
        </h4>
        <p>
          Ищи удаленную работу вместе с нами
        </p>
      </TextBox>
    </BannerBox>
  );
}

export default Banner;
