/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';

type Props = {
  label?: string,
  placeholder?: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
};

const InputBox = styled.div`
  width: 100%;
  input{
    border: 1px solid ${COLORS.GREY};
    border-radius: 6px;
    height: 34px;
    padding: 0 10px;
    width: 100%;
  }
`;

function Input({
  label, value, setValue, placeholder,
}: Props) {
  return (
    <InputBox>
      {label && <div>{label}</div>}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </InputBox>
  );
}

export default Input;
