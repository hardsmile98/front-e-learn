import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { FONTS } from 'mytheme/theme';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import Alert from 'components/UI/Alert';
import { changeIsAuth } from 'store/slices/auth';
import { useLoginMutation } from 'api/publicApi';

const NewAccountBox = styled.div`
  font-size: ${FONTS.small};
  cursor: pointer;
  text-align: center;
`;

type Props = {
  changeForm: () => void;
};

function LoginForm({ changeForm }: Props) {
  const dispatch = useDispatch();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [onLogin, { isError, isLoading, isSuccess }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(changeIsAuth(true));
    }
  }, [isSuccess]);

  const isDisable = !login || !password;

  const loginHandler = () => {
    onLogin({ login, password });
  };

  return (
    <>
      <Input
        placeholder="login"
        value={login}
        setValue={setLogin}
      />

      <Input
        placeholder="password"
        value={password}
        type="password"
        setValue={setPassword}
      />

      <NewAccountBox onClick={changeForm}>
        Зарегистрировать новый аккаунт
      </NewAccountBox>

      <div>
        <Button
          disabled={isDisable || isLoading}
          fullWidth
          onClick={loginHandler}
        >
          Войти
        </Button>
      </div>

      <Alert
        text="Неправильный логин или пароль"
        type="ERROR"
        aling="center"
        visible={isError}
      />
    </>
  );
}

export default LoginForm;
