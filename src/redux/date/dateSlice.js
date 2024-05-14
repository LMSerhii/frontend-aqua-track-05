import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    date: format(new Date(), 'dd-MM-yyyy'),
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
