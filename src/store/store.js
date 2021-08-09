import { configureStore } from '@reduxjs/toolkit';
import flightDirectionReducer from './flightDirectionSlice';
import flightDateReducer from './dateSlice';
import searchValueReducer from './searchFieldSlice';

export default configureStore({
	reducer: {
		flightDirectionReducer,
		flightDateReducer,
		searchValueReducer,
	},
});
