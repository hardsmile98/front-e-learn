import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  COLORS, FONTS, UNIT, UNIT2,
} from 'mytheme/theme';
import bg from 'assets/imgs/bg.svg';
import logo from 'assets/imgs/logo.svg';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthBox = styled.div`
  background-image: url(${bg});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const WrapperBox = styled.div`
  padding: 50px 0;
`;

const FormBox = styled.div`
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BG};
  max-width: 400px;
  margin: 0 auto;
  margin-top: 50px;
  padding: ${UNIT2};
  border-radius: ${UNIT};
`;

const TextBox = styled.div`
  text-align: center;
  border-bottom: 1px solid ${COLORS.GREY};
  padding-bottom: 20px;
  margin-bottom: 20px;
  img {
    width: 40px;
    height: 40px;
  }
  h3 {
    font-weight: bold;
  }
  p {
    font-size: ${FONTS.small};
    color: ${COLORS.SECONDARY};
  }
`;

const ControlsBox = styled.div`
  > div {
    margin-top: 10px;
  }
`;

function Auth() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const changeForm = () => {
    setIsLoginForm((prev) => !prev);
  };

  return (
    <AuthBox>
      <WrapperBox>
        <FormBox>
          <TextBox>
            <img src={logo} alt="logo" />
            <h3>
              E-LEARN
            </h3>
            <p>
              Учи английский вместе с нами
            </p>
          </TextBox>

          <ControlsBox>
            {isLoginForm
              ? <LoginForm changeForm={changeForm} />
              : <RegisterForm changeForm={changeForm} />}
          </ControlsBox>
        </FormBox>
      </WrapperBox>
    </AuthBox>
  );
}

export default Auth;
