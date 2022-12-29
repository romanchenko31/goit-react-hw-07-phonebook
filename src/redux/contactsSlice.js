import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './serviceApi';

const contactsList = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsList,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload);
        state.items = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
