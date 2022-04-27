import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    amount: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        decrimentByAmount: (state, action) => {
            state.value -= action.payload
        },
        setAmount: (state, action) => {
            state.amount = action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount, decrimentByAmount, setAmount } = counterSlice.actions;

export default counterSlice.reducer;