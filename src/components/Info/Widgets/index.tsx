import React from 'react';
import styled from '@emotion/styled';
import { useGetProfileQuery } from 'api/publicApi';
import Section from 'components/UI/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from 'mytheme/theme';
import ProfileInfo from './ProfileInfo';
import Subscribe from './Subscribe';

const WidgetBox = styled.div`
  margin-bottom: 20px;
`;

const WarningBox = styled.div`
  font-size: 14px;
  svg {
    color: ${COLORS.WARNING};
    margin-right: 5px;
  }
`;

function Widgets() {
  const { data, isLoading } = useGetProfileQuery();

  const isShowSubscribe = data?.email === '';
  const isShowInfo = !!data?.img && !!data?.img && !!data?.surname && !!data?.position;

  return (
    <>
      {!isLoading && (
        isShowInfo ? (
          <WidgetBox>
            <ProfileInfo />
          </WidgetBox>
        )
          : (
            <WidgetBox>
              <Section>
                <WarningBox>
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                  />
                  Заполните профиль!
                </WarningBox>
              </Section>
            </WidgetBox>
          )
      )}

      {isShowSubscribe && !isLoading && (
      <WidgetBox>
        <Subscribe />
      </WidgetBox>
      )}
    </>
  );
}

export default Widgets;
