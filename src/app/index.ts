import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { makeupApi } from "../services/makeupApi";
import cartReducer from "../features/cartSlice";
import currencyReducer from "../features/currencySlice";
import likesReducer from "../features/likeSlice";

export const store = configureStore({
  reducer: {
    [makeupApi.reducerPath]: makeupApi.reducer,
    cart: cartReducer,
    currency: currencyReducer,
    likes: likesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(makeupApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
