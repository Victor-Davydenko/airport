import { createSlice } from '@reduxjs/toolkit';

const flightDirectionSlice = createSlice({
	name: 'flightDirection',
	initialState: {
		flightDirection: 'arrival',
	},
	reducers: {
		setFlightDirection(state, action) {
			state.flightDirection = action.payload;
		},
	},
});

export const { setFlightDirection } = flightDirectionSlice.actions;

export default flightDirectionSlice.reducer;
