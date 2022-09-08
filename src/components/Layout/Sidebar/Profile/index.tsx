import React from 'react';
import styled from '@emotion/styled';
import avatar from 'assets/imgs/avatar.svg';
import { COLORS, FONTS } from 'mytheme/theme';
import { publicApi } from 'api/publicApi';

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
  const { data } = publicApi.endpoints.profileInfo.useQueryState({});
  const { name, words } = data || {};

  return (
    <ProfileBox>
      <AvatarBox>
        <img src={avatar} alt="avatar" />
      </AvatarBox>

      <NameBox>
        {name}
      </NameBox>

      <CountWordsBox>
        Количество выученных слов:
        {' '}
        <span>{words}</span>
      </CountWordsBox>
    </ProfileBox>
  );
}

export default Profile;
