import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        date: [],
        isLoading: false,
        error: null,
    },
    reducers: {}
});

export const usersReducer = usersSlice.reducer;