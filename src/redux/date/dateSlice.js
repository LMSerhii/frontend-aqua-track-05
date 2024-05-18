import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentDate,
  getCurrentMonth,
} from '../../shared/helpers/dateServices';

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    date: getCurrentDate(),
    month: getCurrentMonth(),
  },
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setMonth(state, action) {
      state.month = action.payload;
    },
  },
});

export const { setDate, setMonth } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;

export const selectDate = state => state.date.date;
export const selectMonth = state => state.date.month;
