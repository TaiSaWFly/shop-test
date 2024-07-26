import { IProduct } from "@/ts/models/IProduct";
import { PriceInfoType } from "@/ts/types/app.types";
import handleProductPriceInfo from "@/utils/filterProducts/handleProductPriceInfo";
import handleProductsBrandFilter from "@/utils/filterProducts/handleProductsBrandFilter";
import handleProductsPriceFilterRange from "@/utils/filterProducts/handleProductsPriceFilterRange";
import handleProductsSizeFilter from "@/utils/filterProducts/handleProductsSizeFilter";
import handleProductsSortBy from "@/utils/filterProducts/handleProductsSortBy";
import { useEffect, useState } from "react";
import { useAppSelector } from "./reduxHooks/reduxHooks";
import handleProductsDeliveryFilter from "@/utils/filterProducts/handleProductsDeliveryFilter";

const useFilterProducts = (products: IProduct[]) => {
    const { price, size, brand, delivery, sortBy } = useAppSelector(
        (state) => state.filter
    );

    const [filterData, setFilterData] = useState(products);
    const [priceInfo, setPriceInfo] = useState<PriceInfoType>({
        priceFromInfo: 0,
        priceToInfo: 0
    });

    useEffect(() => {
        setFilterData(products);
    }, [products]);

    const filterProducts = () => {
        let filteredProducts = products;

        filteredProducts = handleProductsSortBy(filteredProducts, sortBy);
        filteredProducts = handleProductsPriceFilterRange(
            filteredProducts,
            price
        );
        filteredProducts = handleProductsSizeFilter(filteredProducts, size);
        filteredProducts = handleProductsBrandFilter(filteredProducts, brand);
        filteredProducts = handleProductsDeliveryFilter(
            filteredProducts,
            delivery
        );
        setPriceInfo(handleProductPriceInfo(filteredProducts));

        return filteredProducts;
    };

    useEffect(() => {
        setFilterData(filterProducts());
    }, [price, size, brand, sortBy, delivery]);

    return {
        filterData,
        priceInfo
    };
};

export default useFilterProducts;
