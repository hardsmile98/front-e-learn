import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from 'mytheme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass, faSliders,
} from '@fortawesome/free-solid-svg-icons';

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

function Filter() {
  return (
    <FilterBox>
      <SearchBox>
        <InputBox>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input type="text" placeholder="Введите название" />
        </InputBox>

        <ToggleBox>
          <FontAwesomeIcon icon={faSliders} />
        </ToggleBox>
      </SearchBox>
    </FilterBox>
  );
}

export default Filter;
