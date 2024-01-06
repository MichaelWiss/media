import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        date: []
    },
    reducers: {}
});

export const usersReducer = usersSlice.reducer;