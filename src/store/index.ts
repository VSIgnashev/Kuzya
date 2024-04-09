import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import snackbarReducer from "./snackbarSlice";

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    snackbars: snackbarReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
