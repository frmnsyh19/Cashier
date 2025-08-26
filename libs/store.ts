import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { BagReducer } from "./features/BagRedux";
import { CategoryReducer } from "./features/CategoryReducer";

export const store = configureStore({
  reducer: {
    BagReducer: BagReducer,
    CategoryReducer: CategoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Hooks to use throughout the app
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
