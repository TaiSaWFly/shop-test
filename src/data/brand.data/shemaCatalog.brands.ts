import { CatalogEnum } from "@/ts/enum/Catalog.enum";
import { IBrandProduct } from "@/ts/models/IBrandProduct";
import { shoesBrandData } from "./shoes.brand.data";
import { ShemaCatalogType } from "@/ts/types/app.types";
import { clothBrandData } from "./cloth.brand.product";
import { accessoryBrandData } from "./accessory.brand";

export const shemaCatalogBrands: ShemaCatalogType<IBrandProduct> = {
    [CatalogEnum.shoes]: shoesBrandData,
    [CatalogEnum.cloth]: clothBrandData,
    [CatalogEnum.accessory]: accessoryBrandData
};
