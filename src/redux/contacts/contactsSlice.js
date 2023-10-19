/** @format */

import { createSlice } from '@reduxjs/toolkit';

import { fetchAllContacts, fetchDelContact, fetchPostContact, fetchPutContact } from './fetchApi';

const initialState = {
	items: [],
	isLoading: false,
	error: null,
};

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		resetError: state => {
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAllContacts.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = payload;
			})
			.addCase(fetchAllContacts.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			})
			.addCase(fetchDelContact.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchDelContact.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.filter(item => item.id !== payload.id);
			})
			.addCase(fetchDelContact.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			})
			.addCase(fetchPostContact.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchPostContact.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = [...state.items, payload];
			})
			.addCase(fetchPostContact.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			})
			.addCase(fetchPutContact.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchPutContact.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.map(item => {
					if (item.id === payload.id) return payload;
					return item;
				});
			})
			.addCase(fetchPutContact.rejected, (state, { error }) => {
				state.isLoading = false;
				state.error = error.message;
			});
	},
});

export const contactsReducer = contactsSlice.reducer;

export const { resetError } = contactsSlice.actions;
