import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import axios from "../api/axios";

const GET_INGREDIENTS_URL = "/ingridients";
const CREATE_INGREDIENT_URL = "/ingridients";

export type Ingredient = {
  name: string;
  calories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  id: string;
  files: string[];
};

export type IngredientPayload = {
  name: string;
  calories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  files: string[];
};

type IngredientsState = {
  list: Ingredient[];
  loading: boolean;
};

export const fetchIngredients = createAsyncThunk<
  Ingredient[],
  undefined,
  { rejectValue: string }
>("ingredients/fetchIngredients", async function (_, { rejectWithValue }) {
  const response = await axios.get(GET_INGREDIENTS_URL);
  if (response.statusText != "OK") {
    return rejectWithValue(response.statusText);
  }

  return response.data.values;
});

export const createIngredient = createAsyncThunk<
  string,
  IngredientPayload,
  { rejectValue: string }
>("ingredients/createIngredient", async function (payload) {
  await axios.post(CREATE_INGREDIENT_URL, payload);

  return "Ingredient successfully created";
});

const initialState: IngredientsState = {
  list: [],
  loading: false,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export default ingredientsSlice.reducer;

// function isError(action: AnyAction) {
//   return action.type.endsWith("rejected");
// }
