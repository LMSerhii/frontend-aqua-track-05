// import { createSlice } from '@reduxjs/toolkit';

// const dateSlice = createSlice({
//   name: 'date',
//   initialState: {
//     date: '01-05-2024',
//     //   name: 'за замовчуванням може бути new Date() ?' що має бути за замовч ?
//   },

//   reducers: {
//     setFilterDate(state, action) {
//       state.name = action.payload;
//     },
//   },
// });

// export const { setFilterDate } = dateSlice.actions;
// export const filtersReducer = dateSlice.reducer;

// export const selectDate = state => state.date.date;

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
