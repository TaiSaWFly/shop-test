import { initialStateOrderForm } from "@/data/initialState.data";
import { IProduct } from "@/ts/models/IProduct";
import { OrderFormType } from "@/ts/types/app.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOrderSlice {
    form: OrderFormType;
    priceTotal: number;
    error: boolean;
}

const initialState: IOrderSlice = {
    form: initialStateOrderForm,
    priceTotal: 0,
    error: true
};

const orderSlice = createSlice({
    name: "orderSlice",
    initialState: initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<IProduct>) => {
            state.form.product = action.payload;
        },
        setOrderSize: (state, action: PayloadAction<string>) => {
            state.form.size = action.payload;
        },
        setOrderForm: (state, action: PayloadAction<OrderFormType>) => {
            state.form = action.payload;
        },
        setPriceTotal: (state, action: PayloadAction<number>) => {
            state.priceTotal = action.payload;
        },
        setFormError: (state, action: PayloadAction<boolean>) => {
            state.error = action.payload;
        }
    }
});

const { actions, reducer: orderReducer } = orderSlice;
export const orderActions = actions;
export default orderReducer;
