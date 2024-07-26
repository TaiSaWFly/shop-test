import { IDeliveryProducts } from "../models/IDeliveryProducts";
import { CatalogType, IProduct } from "../models/IProduct";

export type NavigateType = {
    PAGE_NAME: string;
    PAGE_URL: string;
    PAGE_QUERY: CatalogType;
};

export type ShemaCatalogType<T> = {
    [key: string]: T[];
};

export type FormChangeArgsType<N, T> = {
    name: N;
    value: T;
};

export type PriceFilterDataType = {
    priceFrom: string;
    priceTo: string;
};
export type PriceInfoType = { priceFromInfo: number; priceToInfo: number };
export type BrandFilterDataType = string;
export type SizeFilterDataType = string;
export type DeliveryFilterDataType = IDeliveryProducts | null;
export type SortByType = "by_relevance" | "by_cheap" | "by_expensive";
export type BlockDimentionsType = {
    clientWidth: number;
    clientHeight: number;
    offsetLeft: number;
    offsetWidth: number;
    offsetTop: number;
    offsetHeight: number;
};

export type OrderFormType = {
    product: IProduct | null;
    size: string;
    addressPoint: string;
};
