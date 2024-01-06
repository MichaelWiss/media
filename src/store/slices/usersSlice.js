import { createSlice } from 'redux/toolkit';

consg usersSlice = createSlice({
    name: 'users',
    initialState: {
        date: []
    },
    reducers: {}
});

export const usersReducer = usersSlice.reducer;