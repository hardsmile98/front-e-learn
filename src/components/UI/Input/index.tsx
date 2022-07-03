/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';

type Props = {
  label?: string,
  placeholder?: string,
  value: string,
  setValue: any,
  type?: 'text' | 'password' | 'number',
};

const InputBox = styled.div`
  width: 100%;
  p{
    margin-bottom: 5px;
  }
  input{
    border: 1px solid ${COLORS.GREY};
    border-radius: 6px;
    height: 34px;
    padding: 0 10px;
    width: 100%;
    :focus {
      border-color: ${COLORS.PRIMARY};
    }
  }
`;

function Input({
  label, value, setValue, placeholder, type = 'text',
}: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    setValue(targetValue);
  };

  return (
    <InputBox>
      {label && <p>{label}</p>}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputBox>
  );
}

export default Input;
