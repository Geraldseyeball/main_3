import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uncrystal: 0,
  crystal: 0,
  sliver: 0,
  gold: 0,
  bronze: 0,
  item: [],
  pGold: 0,
  pSliver: 0,
  pBronze: 0,
  pItem: [],
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.item = [...state.item, ...action.payload];
    },
    setCrystal: (state, action) => {
      const prev = state.crystal;
      state.crystal = prev + action.payload;
    },
    setUncrystal: (state, action) => {
      const prev = state.uncrystal;
      state.uncrystal = prev + action.payload;
    },
    setGold: (state, action) => {
      const prev = state.gold;
      state.gold = prev + action.payload;
    },
    setSliver: (state, action) => {
      const prev = state.sliver;
      state.sliver = prev + action.payload;
    },
    setBronze: (state, action) => {
      const prev = state.bronze;
      state.bronze = prev + action.payload;
    },
    setPItem: (state, action) => {
      state.pItem = [...state.pItem, ...action.payload];
    },
    setPGold: (state, action) => {
      state.pGold += action.payload;
    },
    setPSliver: (state, action) => {
      state.pSliver += action.payload;
    },
    setPBronze: (state, action) => {
      state.pBronze += action.payload;
    },
  },
});

export const {
  setItem,
  setCrystal,
  setUncrystal,
  setGold,
  setSliver,
  setBronze,
  setPGold,
  setPSliver,
  setPItem,
  setPBronze,
} = itemSlice.actions;
export default itemSlice.reducer;
