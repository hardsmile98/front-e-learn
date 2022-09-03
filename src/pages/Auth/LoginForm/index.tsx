import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { FONTS } from 'mytheme/theme';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import Alert from 'components/UI/Alert';
import { changeIsAuth } from 'store/slices/auth';

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

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  console.log(setError);

  const isDisable = !login || !password;

  const loginHandler = () => {
    dispatch(changeIsAuth(true));
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
          disabled={isDisable}
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
        visible={error}
      />
    </>
  );
}

export default LoginForm;
