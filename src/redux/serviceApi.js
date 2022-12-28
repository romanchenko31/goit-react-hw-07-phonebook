import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function () {
    const response = await fetch(
      'https://63a1709ca543280f77567274.mockapi.io/contacts'
    );

    const contacts = await response.json();
    return contacts;
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async function (id, { dispatch }) {
    await fetch(`https://63a1709ca543280f77567274.mockapi.io/contacts/${id}`, {
      method: 'DELETE',
    });
    dispatch(fetchContacts());
  }
);
