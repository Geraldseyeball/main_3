import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./stateSlice/stateSlice";
import logSlice from "./logSlice/logSlice";
import itemSlice from "./itemSlice/itemSlice";

const store = configureStore({
  reducer: {
    state: stateSlice,
    log: logSlice,
    item: itemSlice,
  },
});

export default store;
