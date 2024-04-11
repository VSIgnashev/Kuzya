import {
  PayloadAction,
  StateFromReducersMapObject,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "../api/axios";
import { RootState } from ".";

const UPLOAD_IMAGE_URL = "/files";

type UploadingState = {
  isUploadDone: boolean;
  image: File | null;
  imagePreview: string;
};

export const handleUploadImage = createAsyncThunk<
  string,
  undefined,
  { state: RootState }
>("uploadImage/handleUploadImage", async (_, thunkApi) => {
  const state = thunkApi.getState() as RootState;
  if (state.uploadImage.image) {
    const formData = new FormData();
    formData.append("file", state.uploadImage.image);
    const response = await axios.post(UPLOAD_IMAGE_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response);
  }

  return "asd";
});

const initialState: UploadingState = {
  isUploadDone: false,
  image: null,
  imagePreview: "",
};

const uploadImageSlice = createSlice({
  name: "uploadImage",
  initialState,
  reducers: {
    getImage(state, action: PayloadAction<File | null>) {
      state.image = action.payload;
      action.payload
        ? (state.imagePreview = URL.createObjectURL(action.payload))
        : (state.imagePreview = "");
    },
    removeImage(state) {
      state.image = null;
      state.imagePreview = "";
    },
  },
});

export const { getImage, removeImage } = uploadImageSlice.actions;

export default uploadImageSlice.reducer;
