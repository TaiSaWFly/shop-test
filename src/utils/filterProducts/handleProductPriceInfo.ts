import { IProduct } from "@/ts/models/IProduct";
import { PriceInfoType } from "@/ts/types/app.types";

const handleProductPriceInfo = (products: IProduct[]): PriceInfoType => {
    const sortData = [...products].sort((a, b) => a.price - b.price);
    return {
        priceFromInfo: !!sortData.length ? sortData[0].price : 0,
        priceToInfo: !!sortData.length ? sortData[sortData.length - 1].price : 0
    };
};

export default handleProductPriceInfo;
