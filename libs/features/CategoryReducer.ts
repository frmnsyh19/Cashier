import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  category: number | null;
};

const initialState: initialStateType = {
  category: null,
};

const CategoryReducers = createSlice({
  name: "categoryreducer",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.category = action.payload.category;
    },
  },
});

export const { addCategory } = CategoryReducers.actions;
export const CategoryReducer = CategoryReducers.reducer;
