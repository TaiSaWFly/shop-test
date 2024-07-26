import {
    initialStateBrandFilter,
    initialStateDiliveryFilter,
    initialStatePriceFilter,
    initialStateSizeFilter,
    initialStateSortByFilter
} from "@/data/initialState.data";
import {
    BrandFilterDataType,
    DeliveryFilterDataType,
    PriceFilterDataType,
    SizeFilterDataType,
    SortByType
} from "@/ts/types/app.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterSlice {
    price: PriceFilterDataType;
    size: SizeFilterDataType;
    brand: BrandFilterDataType;
    delivery: DeliveryFilterDataType;
    sortBy: SortByType;
}

const initialState: IFilterSlice = {
    price: initialStatePriceFilter,
    size: initialStateSizeFilter,
    brand: initialStateBrandFilter,
    delivery: initialStateDiliveryFilter,
    sortBy: initialStateSortByFilter
};

const filterSlice = createSlice({
    name: "filterSlice",
    initialState: initialState,
    reducers: {
        setPrice: (state, action: PayloadAction<PriceFilterDataType>) => {
            state.price = action.payload;
        },
        setSize: (state, action: PayloadAction<SizeFilterDataType>) => {
            state.size = action.payload;
        },
        setBrand: (state, action: PayloadAction<BrandFilterDataType>) => {
            state.brand = action.payload;
        },
        setDilivery: (state, action: PayloadAction<DeliveryFilterDataType>) => {
            state.delivery = action.payload;
        },
        setSortBy: (state, action: PayloadAction<SortByType>) => {
            state.sortBy = action.payload;
        }
    }
});

const { actions, reducer: filterReducer } = filterSlice;
export const filterActions = actions;
export default filterReducer;
