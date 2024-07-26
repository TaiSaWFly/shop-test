import { IProduct } from "@/ts/models/IProduct";
import { BrandFilterDataType } from "@/ts/types/app.types";

const handleProductsBrandFilter = (
    products: IProduct[],
    filter: BrandFilterDataType
) => {
    return !!filter
        ? products.filter((data) => data.brand === filter)
        : products;
};

export default handleProductsBrandFilter;
