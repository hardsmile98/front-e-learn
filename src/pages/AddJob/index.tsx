import React, { useState } from 'react';
import styled from '@emotion/styled';
import Section from 'components/UI/Section';
import Input from 'components/UI/Input';
import Select from 'components/UI/Select';
import Editor from 'components/Editor';
import Button from 'components/UI/Button';

const FormAdd = styled.div`
  margin-top: 10px;
  > div {
    margin-bottom: 10px;
  }
`;

const SalaryBox = styled.div`
  p{
    margin-bottom: 5px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    > div{
      width: calc(50% - 10px);
    }
  }
`;

const SelectsBox = styled.div`
  display: flex;
  > div:not(:last-of-type) {
    margin-right: 30px;
  }
`;

const EditorBox = styled.div`
  margin-top: 20px;
`;

function AddJob() {
  const [position, setPosition] = useState('');
  const [name, setName] = useState('');
  const [salaryFrom, setSalaryFrom] = useState('');
  const [salaryTo, setSalaryTo] = useState('');
  const [type, setType] = useState('');
  const [format, setFormat] = useState('');
  const [text, setText] = useState('');

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

        <SalaryBox>
          <p>Зарплата</p>
          <div>
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
          </div>
        </SalaryBox>

        <SelectsBox>
          <Select
            label="Тип занятости"
            value={type}
            setValue={setType}
            options={['full-time', 'part-time']}
          />
          <Select
            label="Формат"
            value={format}
            setValue={setFormat}
            options={['удаленная', 'офис']}
          />
        </SelectsBox>

        <EditorBox>
          <Editor
            value={text}
            setValue={setText}
          />
        </EditorBox>

        <Button onClick={() => {}}>
          Добавить
        </Button>
      </FormAdd>
    </Section>
  );
}

export default AddJob;
