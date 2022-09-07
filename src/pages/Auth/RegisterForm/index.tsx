import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FONTS } from 'mytheme/theme';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import Alert from 'components/UI/Alert';
import { useRegisterMutation } from 'api/publicApi';

const NewAccountBox = styled.div`
  font-size: ${FONTS.small};
  cursor: pointer;
  text-align: center;
`;

type Props = {
  changeForm: () => void;
};

function RegisterForm({ changeForm }: Props) {
  const [login, setLogin] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [onRegister, { isError, isLoading, isSuccess }] = useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      setLogin('');
      setName('');
      setPassword('');
    }
  }, [isSuccess]);

  const isDisable = login.trim().length < 3 || password.trim().length < 5 || !name.trim();

  const registerHander = () => {
    onRegister({
      login,
      name,
      password,
    });
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
          disabled={isDisable || isLoading}
          fullWidth
          onClick={registerHander}
        >
          Зарегистрировать
        </Button>
      </div>

      <Alert
        text="Ошибка!"
        type="ERROR"
        aling="center"
        visible={isError}
      />

      <Alert
        text="Пользователь зарегистрирован"
        type="INFO"
        aling="center"
        visible={isSuccess}
      />
    </>
  );
}

export default RegisterForm;
