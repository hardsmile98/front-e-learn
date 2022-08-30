import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FONTS } from 'mytheme/theme';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import Alert from 'components/UI/Alert';

const NewAccountBox = styled.div`
  font-size: ${FONTS.small};
  cursor: pointer;
  text-align: center;
`;

type Props = {
  changeForm: () => void;
};

function RegisterForm({ changeForm }: Props) {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  console.log(setError);

  const isDisable = login.trim().length < 3 || password.trim().length < 5 || !name.trim();

  const registerHander = () => {
    // Register
  };

  return (
    <>
      <Input
        placeholder="login"
        value={login}
        setValue={setLogin}
      />

      <Input
        placeholder="name"
        value={name}
        setValue={setName}
      />

      <Input
        placeholder="password"
        value={password}
        type="password"
        setValue={setPassword}
      />

      <NewAccountBox onClick={changeForm}>
        У вас уже есть аккаунт? Войти
      </NewAccountBox>

      <div>
        <Button
          disabled={isDisable}
          fullWidth
          onClick={registerHander}
        >
          Зарегистрировать
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

export default RegisterForm;
