import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { COLORS, FONTS } from 'mytheme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass, faSliders,
} from '@fortawesome/free-solid-svg-icons';
import Input from 'components/UI/Input';
import Section from 'components/UI/Section';
import { RootState } from 'store/store';
import { changeFilter } from 'store/slices/filter';

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
  const dispatch = useDispatch();

  const [isShowFilter, setIsShowFilter] = useState(false);
  const { search, salaryTo, salaryFrom } = useSelector((state: RootState) => state.filter);

  return (
    <Section>
      <SearchBox>
        <InputBox>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            value={search}
            type="text"
            placeholder="Введите название"
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeFilter({
                name: 'search',
                value: e.target.value,
              }))
            }
          />
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
            <Input
              value={salaryTo}
              setValue={(value: string) => dispatch(changeFilter({ name: 'salaryTo', value }))}
              placeholder="от"
              type="number"
            />
            <Input
              value={salaryFrom}
              setValue={(value: string) => dispatch(changeFilter({ name: 'salaryFrom', value }))}
              placeholder="до"
              type="number"
            />
          </div>
        </SalaryBox>
      </FormBox>
      )}
    </Section>
  );
}

export default Filter;
