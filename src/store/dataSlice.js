import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../constants/constants';

const instance = axios.create({
	baseURL: baseUrl,
});
const setError = (res) => {
	if (Math.floor(res.status / 100) !== 2) {
		console.log(res.status);
	}
	return res;
};

const interceptors = (axios) => {
	axios.interceptors.response.use(setError);
};

interceptors(instance);
export const getAllFlights = createAsyncThunk('flightData/getAllFlights', async (settings, { rejectWithValue }) => {
	const res = await instance.get(settings.url, settings.options);
	if (Math.floor(res.status / 100) !== 2) {
		rejectWithValue(new Error('wrong something'));
	}
	return res.data.body;
});

export const getFlightInfo = createAsyncThunk('flightData/getFlightInfo', async (settings, { rejectWithValue }) => {
	try {
		const res = await instance.get(settings.url, settings.options);
		if (Math.floor(res.status / 100) !== 2) {
			throw new Error('Something went wrong');
		}
		return res.data.body;
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
		[getAllFlights.pending]: (state) => {
			state.isLoading = true;
		},
		[getAllFlights.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.flightData = action.payload;
		},
		[getAllFlights.rejected]: (state, action) => {
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
