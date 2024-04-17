import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import axios from "../api/axios";

const CREATE_RECIPE_URL = "/recipes";

type Entry = {
  measureId: number | "";
  ingredientId: number | "";
  amount: number | "";
};

// type Image = {
//   purpose: string;
//   id: number;
// };

type Step = {
  step: string;
  description: string;
};

type CreateRecipeState = {
  name: string;
  entries: Entry[];
  instruction: Step[];
  requiredTools: string[];
  time: number | "";
  servingsQty: number | "";
};

export const createRecipe = createAsyncThunk<
  boolean,
  number,
  { state: RootState }
>("createRecipe/createRecipe", async (imageId, thunkApi) => {
  const state = thunkApi.getState() as RootState;
  const payload = {
    name: state.createRecipe.name,
    entries: state.createRecipe.entries,
    instruction: state.createRecipe.instruction,
    requiredTools: state.createRecipe.requiredTools,
    files: [{ purpose: "0", id: imageId }],
    servingsQty: state.createRecipe.servingsQty,
    time: state.createRecipe.time,
  };

  const response = await axios.post(CREATE_RECIPE_URL, payload);
  console.log(response);

  return false;
});

const initialState: CreateRecipeState = {
  name: "",
  entries: [{ amount: "", measureId: "", ingredientId: "" }],
  instruction: [],
  requiredTools: [],
  servingsQty: "",
  time: "",
};

const createRecipeSlice = createSlice({
  name: "creteSlice",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeEntries(state, action: PayloadAction<Entry[]>) {
      state.entries = action.payload;
    },
    changeInstruction(state, action: PayloadAction<Step[]>) {
      state.instruction = action.payload;
    },
    changeTools(state, action: PayloadAction<string[]>) {
      state.requiredTools = action.payload;
    },
    changeServingsQty(state, action: PayloadAction<number | "">) {
      state.servingsQty = action.payload;
    },
    changeTime(state, action: PayloadAction<number | "">) {
      state.time = action.payload;
    },
    changeIngredientName(
      state,
      action: PayloadAction<{ id: number; ingredientId: number }>
    ) {
      state.entries[action.payload.id].ingredientId =
        action.payload.ingredientId;
    },
    changeIngredientMeasure(
      state,
      action: PayloadAction<{ id: number; measureId: number }>
    ) {
      state.entries[action.payload.id].measureId = action.payload.measureId;
    },
    changeIngredientAmount(
      state,
      action: PayloadAction<{ id: number; amount: number | "" }>
    ) {
      state.entries[action.payload.id].amount = action.payload.amount;
    },
    createIngredient(state) {
      state.entries.push({ amount: "", measureId: "", ingredientId: "" });
    },
  },
});

export const {
  changeName,
  changeEntries,
  changeInstruction,
  changeTools,
  changeServingsQty,
  changeTime,
  changeIngredientAmount,
  changeIngredientMeasure,
  changeIngredientName,
  createIngredient,
} = createRecipeSlice.actions;

export default createRecipeSlice.reducer;
