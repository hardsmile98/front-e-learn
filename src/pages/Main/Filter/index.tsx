import React, { useState } from 'react';
import styled from '@emotion/styled';
import { COLORS, FONTS } from 'mytheme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass, faSliders,
} from '@fortawesome/free-solid-svg-icons';
import Input from 'components/UI/Input';

const FilterBox = styled.div`
  background-color: ${COLORS.WHITE};
  padding: 20px;
  border-radius: 10px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
`;

const InputBox = styled.div`
  flex-grow: 1;
  display: flex;
  span {
    color: ${COLORS.GREY};
  }
  input {
    padding: 0 15px 0 10px;
    width: 100%;
  }
`;

const ToggleBox = styled.div`
  cursor: pointer;
`;

const FormBox = styled.div`
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid ${COLORS.GREY};
`;

const SalaryBox = styled.div`
  p {
    font-size: ${FONTS.small};
  }
  div {
    margin-top: 3px;
    display: flex;
    justify-content: space-between;
    div {
      width: calc(50% - 5px);
    }
  }
`;

function Filter() {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [toSalary, setToSalary] = useState('');
  const [fromSalary, setFromSalary] = useState('');

  return (
    <FilterBox>
      <SearchBox>
        <InputBox>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input type="text" placeholder="Введите название" />
        </InputBox>

        <ToggleBox onClick={() => setIsShowFilter((prev) => !prev)}>
          <FontAwesomeIcon icon={faSliders} />
        </ToggleBox>
      </SearchBox>

      {isShowFilter && (
      <FormBox>
        <SalaryBox>
          <p>Зарплата</p>
          <div>
            <Input value={toSalary} setValue={setToSalary} placeholder="от" />
            <Input value={fromSalary} setValue={setFromSalary} placeholder="до" />
          </div>
        </SalaryBox>
      </FormBox>
      )}
    </FilterBox>
  );
}

export default Filter;
