import React, { useState } from 'react';
import styled from '@emotion/styled';
import Section from 'components/UI/Section';
import Input from 'components/UI/Input';
import Select from 'components/UI/Select';

const FormAdd = styled.div`
  margin-top: 10px;
  > div {
    margin-bottom: 10px;
  }
`;

const SalaryBox = styled.div`
  display: flex;
  justify-content: space-between;
  > div{
    width: calc(50% - 10px);
  }
`;

function AddJob() {
  const [position, setPosition] = useState('');
  const [name, setName] = useState('');
  const [salaryFrom, setSalaryFrom] = useState('');
  const [salaryTo, setSalaryTo] = useState('');

  return (
    <Section>
      <h2>Добавление новой записи</h2>

      <FormAdd>
        <Input
          label="Название"
          value={position}
          setValue={setPosition}
        />

        <Input
          label="Компания"
          value={name}
          setValue={setName}
        />

        <div>
          <p>Зарплата</p>
          <SalaryBox>
            <Input
              value={salaryFrom}
              setValue={setSalaryFrom}
              placeholder="от"
              type="number"
            />
            <Input
              value={salaryTo}
              setValue={setSalaryTo}
              placeholder="до"
              type="number"
            />
          </SalaryBox>
        </div>

        <Select />
      </FormAdd>
    </Section>
  );
}

export default AddJob;
