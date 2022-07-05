import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Section from 'components/UI/Section';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import { useGetProfileQuery } from 'api/publicApi';

const FormEdit = styled.div`
  margin-top: 10px;
  > div {
    margin-bottom: 10px;
  }
`;

function Profile() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [position, setPosition] = useState('');

  const { data } = useGetProfileQuery();

  useEffect(() => {
    if (data) {
      setName(data?.name);
      setSurname(data?.surname);
      setPosition(data?.position);
    }
  }, [data]);

  return (
    <Section>
      <h2>Профиль</h2>

      <FormEdit>
        <Input
          label="Имя"
          value={name}
          setValue={setName}
        />
        <Input
          label="Фамилия"
          value={surname}
          setValue={setSurname}
        />
        <Input
          label="Позиция"
          value={position}
          setValue={setPosition}
        />
        <Button onClick={() => {}}>
          Сохранить
        </Button>
      </FormEdit>
    </Section>
  );
}

export default Profile;
