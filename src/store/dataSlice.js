import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../constants/constants';

const getData = createAsyncThunk({
	name: 'flightData/getData',
	async function(settings, { rejectWithValue }) {
		try {
			const res = await fetch(`${baseUrl}${settings.url}`, settings.options);
			if (!res.ok) {
				throw new Error('Something went wrong');
			}
			const json = await res.json();
			return json;
		}
		catch (e) {
			return rejectWithValue(e);
		}
	},
});

const dataSlice = createSlice({
	name: 'flightData',
	initialState: {
		isLoading: false,
		flightData: null,
		isError: null,
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
			state.isError = action.error;
		},
	},
});

export { getData };

export default dataSlice.reducer;
