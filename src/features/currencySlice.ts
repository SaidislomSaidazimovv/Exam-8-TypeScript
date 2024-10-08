import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
  currentCurrency: string;
}

const initialState: CurrencyState = {
  currentCurrency: 'USD',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currentCurrency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
