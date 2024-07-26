"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterReducer, { filterActions } from "./slices/filter.slice";
import orderReducer, { orderActions } from "./slices/order.slice";
import favoriteReducer, { favoriteActions } from "./slices/favorite.slice";

const rootReducer = combineReducers({
    filter: filterReducer,
    order: orderReducer,
    favorite: favoriteReducer
});

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production"
});

export const rootActions = {
    ...filterActions,
    ...orderActions,
    ...favoriteActions
};

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
