import {
    BlockDimentionsType,
    BrandFilterDataType,
    DeliveryFilterDataType,
    OrderFormType,
    PriceFilterDataType,
    SizeFilterDataType,
    SortByType
} from "@/ts/types/app.types";

export const initialStatePriceFilter: PriceFilterDataType = {
    priceFrom: "",
    priceTo: ""
};
export const initialStateSizeFilter: SizeFilterDataType = "";
export const initialStateBrandFilter: BrandFilterDataType = "";
export const initialStateDiliveryFilter: DeliveryFilterDataType = null;
export const initialStateSortByFilter: SortByType = "by_relevance";
export const initialStateBlockDimentions: BlockDimentionsType = {
    clientHeight: 0,
    clientWidth: 0,
    offsetLeft: 0,
    offsetWidth: 0,
    offsetTop: 0,
    offsetHeight: 0
};
export const initialStateLocation = {
    center: [55.77164004472414, 37.60618126002484],
    zoom: 12,
    bounds: [
        [55.68998210265508, 37.40911399928264],
        [55.853126555343444, 37.803248520767006]
    ],
    controls: []
};
export const initialStateOrderForm: OrderFormType = {
    product: null,
    addressPoint: "",
    size: ""
};
