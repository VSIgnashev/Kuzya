import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/axios";

const GET_RECIPES_URL = "/recipes";

type Step = {
  step: number;
  description: string;
};

type Measure = {
  id: number;
  name: string;
  ration: number;
};

type Ingredient = {
  id: number;
  name: string;
  calories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
};

type Entry = {
  id: number;
  amount: number;
  measure: Measure;
  ingredient: Ingredient;
};

type Recipe = {
  id: number;
  name: string;
  requiredTools: string[];
  steps: Step[];
  cookingTime: number;
  servingsCount: number;
  calories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  entries: Entry[];
};

type RecipesState = {
  list: Recipe[];
  loading: boolean;
};

export const fetchRecipes = createAsyncThunk<
  Recipe[],
  undefined,
  { rejectValue: string }
>("recipes/fetchIngredients", async function (_, { rejectWithValue }) {
  const response = await axios.get(GET_RECIPES_URL);
  console.log(response);
  if (response.statusText != "OK") {
    return rejectWithValue(response.statusText);
  }

  return response.data.values;
});

const initialState: RecipesState = {
  list: [],
  loading: false,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export default recipesSlice.reducer;
