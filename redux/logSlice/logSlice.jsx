import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  log: [],
};

const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    addLog: (state, action) => {
      const newLog = action.payload;
      state.log = [...state.log, ...newLog];
    },
  },
});

export const { addLog } = logSlice.actions;
export default logSlice.reducer;
