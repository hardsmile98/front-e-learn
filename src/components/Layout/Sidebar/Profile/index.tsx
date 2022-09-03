import React from 'react';
import styled from '@emotion/styled';
import avatar from 'assets/imgs/avatar.svg';
import { COLORS, FONTS } from 'mytheme/theme';

const ProfileBox = styled.div`
    text-align: center;
`;

const AvatarBox = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid ${COLORS.BORDER};
    }
`;

const NameBox = styled.div`
    margin-top: 5px;
    font-size: ${FONTS.input};
    color: ${COLORS.WHITE};
    font-weight: 500;
    margin-bottom: 5px;
`;

const CountWordsBox = styled.div`
    font-size: ${FONTS.small};
    color: ${COLORS.SECONDARY};

    span {
        color: ${COLORS.WHITE};
    }
`;

function Profile() {
  return (
    <ProfileBox>
      <AvatarBox>
        <img src={avatar} alt="avatar" />
      </AvatarBox>

      <NameBox>
        Денис
      </NameBox>

      <CountWordsBox>
        Количество выученных слов:
        {' '}
        <span>0</span>
      </CountWordsBox>
    </ProfileBox>
  );
}

export default Profile;
