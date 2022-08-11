import { githubApi } from './github/githubApi';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		[githubApi.reducerPath]:githubApi.reducer
	}
})