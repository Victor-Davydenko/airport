import { createSlice } from '@reduxjs/toolkit';

const searchValueSlice = createSlice({
	name: 'searchValue',
	initialState: {
		searchValue: '',
	},
	reducers: {
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},
	},
});

export const { setSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
