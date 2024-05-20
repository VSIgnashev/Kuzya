import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import snackbarReducer from "./snackbarSlice";
import uploadImageReducer from "./uploadImageSlice";
import createRecipeSlice from "./createRecipeSlice";
import recipesSlice from "./recipesSlice";

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    snackbars: snackbarReducer,
    uploadImage: uploadImageReducer,
    createRecipe: createRecipeSlice,
    recipes: recipesSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
