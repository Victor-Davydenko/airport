import { configureStore } from '@reduxjs/toolkit';
import flightDirectionReducer from './flightDirectionSlice';

export default configureStore({
	reducer: {
		flightDirectionReducer,
	},
});
