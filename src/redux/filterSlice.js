import { createSlice } from '@reduxjs/toolkit';

const filterFinder = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterFinder,
  reducers: {
    filterContacts: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
