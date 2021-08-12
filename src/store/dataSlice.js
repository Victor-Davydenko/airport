import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../constants/constants';

export const getData = createAsyncThunk('flightData/getData', async (settings, { rejectWithValue }) => {
	try {
		const res = await fetch(`${baseUrl}${settings.url}`, settings.options);
		if (!res.ok) {
			throw new Error('Something went wrong');
		}
		const json = await res.json();
		return json.body;
	}
	catch (e) {
		return rejectWithValue(e);
	}
});

export const getFlightInfo = createAsyncThunk('flightData/getFlightInfo', async (settings, { rejectWithValue }) => {
	try {
		const res = await fetch(`${baseUrl}${settings.url}`, settings.options);
		if (!res.ok) {
			throw new Error('Something went wrong');
		}
		const json = await res.json();
		return json.body;
	}
	catch (e) {
		return rejectWithValue(e);
	}
});

const dataSlice = createSlice({
	name: 'flightData',
	initialState: {
		isLoading: false,
		flightData: null,
		flightInfo: null,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[getData.pending]: (state) => {
			state.isLoading = true;
		},
		[getData.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.flightData = action.payload;
		},
		[getData.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		},
		[getFlightInfo.pending]: (state) => {
			state.isLoading = true;
		},
		[getFlightInfo.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.flightInfo = action.payload;
		},
		[getFlightInfo.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		},
	},
});

export default dataSlice.reducer;
