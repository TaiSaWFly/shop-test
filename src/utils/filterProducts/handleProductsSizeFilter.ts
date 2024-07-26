import { IProduct } from "@/ts/models/IProduct";
import { SizeFilterDataType } from "@/ts/types/app.types";

const handleProductsSizeFilter = (
    products: IProduct[],
    filter: SizeFilterDataType
) => {
    return !!filter
        ? products.filter((data) => data.size === filter)
        : products;
};

export default handleProductsSizeFilter;
