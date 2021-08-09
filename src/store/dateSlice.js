import { createSlice } from '@reduxjs/toolkit';

import { today } from '../constants/constants';

const flightDateSlice = createSlice({
	name: 'flightDate',
	initialState: {
		chosenDate: today,
	},
	reducers: {
		setChosenDate(state, action) {
			state.chosenDate = action.payload;
		},
	},
});

export const { setChosenDate } = flightDateSlice.actions;

export default flightDateSlice.reducer;
