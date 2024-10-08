import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../services/makeupApi";

interface LikesState {
  items: Product[];
}

const initialState: LikesState = {
  items: JSON.parse(localStorage.getItem("likes") || "[]"),
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    addToLikes: (state, action: PayloadAction<Product>) => {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
        localStorage.setItem("likes", JSON.stringify(state.items));
      }
    },
    removeFromLikes: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("likes", JSON.stringify(state.items));
    },
  },
});

export const { addToLikes, removeFromLikes } = likeSlice.actions;
export default likeSlice.reducer;
