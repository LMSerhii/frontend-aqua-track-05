import { createSlice } from '@reduxjs/toolkit';
import { getCurrentDate } from '../../shared/helpers/dateServices';

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    date: getCurrentDate(),
  },
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
  },
});

export const { setDate } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;

export const selectDate = state => state.date.date;
