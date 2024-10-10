import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../services/makeupApi";
import { toast } from "react-toastify";

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
        toast.success(`${action.payload.name} added to favorites!`);
      }
    },
    removeFromLikes: (state, action: PayloadAction<number>) => {
      const removedItem = state.items.find(
        (item) => item.id === action.payload
      );
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("likes", JSON.stringify(state.items));
      if (removedItem) {
        toast.error(`${removedItem.name} removed from favorites!`);
      }
    },
  },
});

export const { addToLikes, removeFromLikes } = likeSlice.actions;
export default likeSlice.reducer;
