import React from 'react';
import styled from '@emotion/styled';
import { COLORS, FONTS } from 'mytheme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const SubscribeBox = styled.div`
  background: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;
`;

const IconBox = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;

const TextBox = styled.div`
  text-align: center;
  p {
    margin-top: 5px;
    font-size: ${FONTS.small}
  }
`;

const FormBox = styled.div`
    margin-top: 15px;
    display: flex;
    input {
        width: 75%;
        height: 35px;
        padding: 0 8px;
        font-size: ${FONTS.small};
        border-radius: 5px 0 0 5px;
    }
    button {
        color: ${COLORS.WHITE};
        height: 35px;
        width: 25%;
        background-color: ${COLORS.PRIMARY_HOVER};
        border-radius: 0 5px 5px 0;
    }
`;

function Subscribe() {
  const onSubmitHanlder = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <SubscribeBox>
      <IconBox>
        <FontAwesomeIcon icon={faEnvelopeOpen} />
      </IconBox>

      <TextBox>
        <h4>Подпишись</h4>
        <p>
          Введите ваш email и получайте уведомления о новых вакансиях
        </p>
      </TextBox>

      <FormBox onSubmit={(e) => onSubmitHanlder(e)}>
        <input type="text" placeholder="email" />
        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </FormBox>
    </SubscribeBox>
  );
}

export default Subscribe;
