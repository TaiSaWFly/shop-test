import { IProduct } from "@/ts/models/IProduct";
import { PriceFilterDataType } from "@/ts/types/app.types";

const handleProductsPriceFilterRange = (
    products: IProduct[],
    filter: PriceFilterDataType
) => {
    let priceRangeData = products;

    priceRangeData = !!filter.priceFrom
        ? priceRangeData.filter(
              (data) => Number(filter.priceFrom) <= data.price
          )
        : priceRangeData;

    priceRangeData = !!filter.priceTo
        ? priceRangeData.filter((data) => Number(filter.priceTo) >= data.price)
        : priceRangeData;

    return priceRangeData;
};

export default handleProductsPriceFilterRange;
