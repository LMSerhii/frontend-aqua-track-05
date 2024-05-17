import { createSlice } from '@reduxjs/toolkit';

const trackerSlice = createSlice({
  name: 'tracker',
  initialState: {
    allRecordsByMonth: [],
  },
  reducers: {
    setAllRecordsByMonth(state, action) {
      state.allRecordsByMonth = action.payload;
    },
  },
});

export const { setAllRecordsByMonth } = trackerSlice.actions;
export const trackerReducer = trackerSlice.reducer;

export const selectTracker = state => state.tracker.allRecordsByMonth;
