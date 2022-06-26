import React, { useState } from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import useAuth from 'hooks/useAuth';

const AuthBox = styled.div`
    background-color: ${COLORS.WHITE};
    padding: 20px;
    border-radius: 10px;
    max-width: 480px;
    margin: 60px auto 0;
`;

const FormBox = styled.div`
  margin-top: 10px;
  div{
    margin-bottom: 10px;
  }
`;

function Auth() {
  const { login } = useAuth();

  const [loginValue, setLoginValue] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const validate = () => {
    if (loginValue.length > 3 && password.length > 3) {
      setError(false);
    }
    setError(true);
  };

  const submitHandler = () => {
    validate();

    if (!error) {
      login('token');
    }
  };

  return (
    <AuthBox>
      <h2>
        Вход
      </h2>

      <FormBox>
        <Input
          placeholder="login"
          value={loginValue}
          setValue={setLoginValue}
        />

        <Input
          placeholder="Пароль"
          value={password}
          setValue={setPassword}
          type="password"
        />

        <Button fullWidth onClick={submitHandler}>
          Войти
        </Button>
      </FormBox>
    </AuthBox>
  );
}

export default Auth;
