/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type Action = {
  type: string,
  payload: {
    name: 'search' | 'salaryTo' | 'salaryFrom',
    value: string,
  }
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    search: '',
    salaryTo: '',
    salaryFrom: '',
  },
  reducers: {
    changeFilter: (state, action: Action) => { state[action.payload.name] = action.payload.value; },
  },
});

export default filterSlice.reducer;

export const {
  changeFilter,
} = filterSlice.actions;
