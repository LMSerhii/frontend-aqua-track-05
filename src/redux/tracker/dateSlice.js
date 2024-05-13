import { createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    name: '',
    //   name: 'за замовчуванням може бути new Date() ?' що має бути за замовч ?
  },

  reducers: {
    setFilterDate(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilterDate } = dateSlice.actions;
export const filtersReducer = dateSlice.reducer;

// Катя накидала щось, є питання /////

// export const waterAmountInPercent = createAsyncThunk(
//   'auth/tracker',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(`${USERS}`);
//       console.log(response.data);
//       const dailyWater = response.data.dailyWater;

//       const res = await axios.get(`${TRACKER}`);
//       const totalWaterAmountPerDay = res.data.totalAmount;
//       const inPercentage = (totalWaterAmountPerDay * 100) / dailyWater;
//       return inPercentage;
// export const currentUser = createAsyncThunk(
//   'current/upload',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(`${USERS}${CURRENT}`);
//       return response.data;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
