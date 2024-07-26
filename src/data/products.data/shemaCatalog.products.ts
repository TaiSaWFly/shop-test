import { CatalogEnum } from "@/ts/enum/Catalog.enum";
import { IProduct } from "@/ts/models/IProduct";
import { ShemaCatalogType } from "@/ts/types/app.types";
import shoesData from "./shoes.data";
import clothData from "./cloth.data";
import accessoryData from "./accessory.data";

export const shemaCatalogProducts: ShemaCatalogType<IProduct> = {
    [CatalogEnum.shoes]: shoesData,
    [CatalogEnum.cloth]: clothData,
    [CatalogEnum.accessory]: accessoryData
};
