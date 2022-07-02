/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';

interface IButton {
  isSelect: boolean,
}

const ButtonsBox = styled.div`
  p {
    margin-bottom: 5px;
  }
  > div{
    display: flex;
  }
  button {
    margin-right: 10px;
  }
`;

const Button = styled.button<IButton>`
  border: 1px solid ${COLORS.PRIMARY};
  background-color: ${(props) => (props.isSelect ? COLORS.PRIMARY : COLORS.WHITE)};
  color: ${(props) => (props.isSelect ? COLORS.WHITE : COLORS.PRIMARY)};
  padding: 6px 15px;
  border-radius: 10px;
`;

type Props = {
  label?: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  options: Array<string>
};

function Select({
  label, value, setValue, options,
}: Props) {
  return (
    <ButtonsBox>
      {label && <p>{label}</p>}

      <div>
        {options.map((option) => (
          <Button
            key={option}
            type="button"
            onClick={() => setValue(option)}
            isSelect={value === option}
          >
            {option}
          </Button>
        ))}
      </div>
    </ButtonsBox>
  );
}

export default Select;
