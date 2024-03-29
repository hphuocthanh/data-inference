import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  file: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setFile: (state, action) => {
      state.file = action.payload.file;
    },
  },
});

export const { setFile } = dataSlice.actions;

export default dataSlice.reducer;
