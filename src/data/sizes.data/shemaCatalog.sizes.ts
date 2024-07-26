import { CatalogEnum } from "@/ts/enum/Catalog.enum";
import { ShemaCatalogType } from "@/ts/types/app.types";
import { shoesSizesData } from "./shoes.sizes.data";
import { ISizeProduct } from "@/ts/models/ISizeProduct";
import { shoesClothData } from "./cloth.sizes.data";

export const shemaCatalogSizes: ShemaCatalogType<ISizeProduct> = {
    [CatalogEnum.shoes]: shoesSizesData,
    [CatalogEnum.cloth]: shoesClothData,
    [CatalogEnum.accessory]: []
};
