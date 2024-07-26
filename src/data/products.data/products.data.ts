import { IProduct } from "@/ts/models/IProduct";
import clothData from "./cloth.data";
import shoesData from "./shoes.data";
import accessoryData from "./accessory.data";

export const products: IProduct[] = [
    ...shoesData,
    ...clothData,
    ...accessoryData
];
