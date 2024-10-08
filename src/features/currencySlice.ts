import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
    selected: string;
}

const initialState: CurrencyState = {
    selected: 'USD', 
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrency(state, action: PayloadAction<string>) {
            state.selected = action.payload;
        },
    },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;