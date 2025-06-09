import { createSlice, type Draft, type PayloadAction } from "@reduxjs/toolkit";
import type { TSkip, TSkipState } from "../../models/Skip";

const initialState: TSkipState = {
  skips: [],
  selectedSkip: null,
  isLoading: false,
  error: undefined,
};

export const SkipSlice = createSlice({
  name: "SKIP",
  initialState,
  reducers: {
    fetchSkips: (state: Draft<TSkipState>) => {
      state.isLoading = true;
    },
    fetchSkipsSuccess: (
      state: Draft<TSkipState>,
      action: PayloadAction<TSkip[]>
    ) => {
      state.isLoading = false;
      state.skips = action.payload;
    },
    fetchSkipsFailed: (
      state: Draft<TSkipState>,
      action: PayloadAction<unknown>
    ) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setSelectedSkip: (
      state: Draft<TSkipState>,
      action: PayloadAction<TSkip | null>
    ) => {
      state.selectedSkip = action.payload;
    },
  },
});

export const {
  setSelectedSkip,
  fetchSkips,
  fetchSkipsFailed,
  fetchSkipsSuccess,
} = SkipSlice.actions;

export default SkipSlice.reducer;
