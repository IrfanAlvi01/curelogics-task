import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product-slice";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

// type DispatchFunc = () => typeof store.dispatch;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelecter: TypedUseSelectorHook<RootState> = useSelector;
