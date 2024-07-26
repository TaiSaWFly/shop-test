import { IProduct } from "@/ts/models/IProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavoriteSlice {
    favorites: IProduct[];
}

const initialState: IFavoriteSlice = { favorites: [] };

const favoriteSlice = createSlice({
    name: "favoriteSlice",
    initialState: initialState,
    reducers: {
        setFavorite: (state, action: PayloadAction<IProduct>) => {
            state.favorites.push(action.payload);
        },
        deleteFavorite: (state, action: PayloadAction<IProduct>) => {
            state.favorites = state.favorites.filter(
                (data) => data.id !== action.payload.id
            );
        }
    }
});

const { actions, reducer: favoriteReducer } = favoriteSlice;
export const favoriteActions = actions;
export default favoriteReducer;
