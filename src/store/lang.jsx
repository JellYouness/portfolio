// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = { value: 'fr' };

// ==============================|| SLICE - MENU ||============================== //

const lang = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        useFr(state) {
            state.value = 'fr';
        },
        useEng(state) {
            state.value = 'en';
        }
    }
});

export default lang.reducer;

export const { useEng, useFr } = lang.actions;
