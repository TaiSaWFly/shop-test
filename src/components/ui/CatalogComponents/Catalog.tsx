"use client";

import { CatalogType, IProduct } from "@/ts/models/IProduct";
import { FC, useEffect, useState } from "react";
import BrandFilter from "../FilterComponents/BrandFilter/BrandFilter";
import DeliveryFilter from "../FilterComponents/DeliveryFilter/DeliveryFilter";
import PriceFilter from "../FilterComponents/PriceFilter/PriceFilter";
import SizeFilter from "../FilterComponents/SizeFilter/SizeFilter";
import SortFilter from "../FilterComponents/SortFilter/SortFilter";
import ProductComponent from "../Product/ProductComponent/ProductComponent";
import style from "./catalog.module.scss";
import useFilterProducts from "@/hooks/useFilterProducts";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { BREAKPOINTS } from "@/constants/breakpoint.constants";
import CatalogModalFilters from "./CatalogModalFilters";

interface CatalogProps {
    catalog: CatalogType;
    products: IProduct[];
}

const Catalog: FC<CatalogProps> = ({ catalog, products }) => {
    const [isClient, setClient] = useState(false);
    const { windowWidth } = useWindowDimensions();
    const { filterData, priceInfo } = useFilterProducts(products);

    useEffect(() => {
        setClient(true);
    }, []);

    return (
        <div className={style.component}>
            {isClient ? (
                <>
                    {windowWidth > BREAKPOINTS.BREAKPOINT_780 ? (
                        <div className={style.component_wrap}>
                            <div className={style.filters}>
                                <PriceFilter {...{ priceInfo }} />
                                <SizeFilter {...{ catalog }} />
                                <BrandFilter {...{ catalog }} />
                            </div>

                            <div className={style.group}>
                                <div className={style.group_modile_filters}>
                                    <div
                                        className={
                                            style.group_modile_filters__wrap
                                        }
                                    >
                                        <PriceFilter.Mobile
                                            {...{ priceInfo }}
                                        />
                                        <SizeFilter.Mobile {...{ catalog }} />
                                        <BrandFilter.Mobile {...{ catalog }} />
                                        <DeliveryFilter />
                                    </div>
                                    <div>
                                        <SortFilter />
                                    </div>
                                </div>
                                <div className={style.group_products}>
                                    {filterData.map((data) => (
                                        <ProductComponent.Catalog
                                            key={data.id}
                                            product={data}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={style.component_wrap}>
                            <CatalogModalFilters {...{ catalog, priceInfo }} />

                            <div className={style.group}>
                                <div className={style.group_modile_filters}>
                                    <div
                                        className={
                                            style.group_modile_filters__wrap
                                        }
                                    >
                                        <PriceFilter.Mobile
                                            {...{ priceInfo }}
                                        />
                                        <SizeFilter.Mobile {...{ catalog }} />
                                        <BrandFilter.Mobile {...{ catalog }} />
                                        <DeliveryFilter />
                                    </div>
                                </div>
                                <div className={style.group_products}>
                                    {filterData.map((data) => (
                                        <ProductComponent.Catalog
                                            key={data.id}
                                            product={data}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : null}
        </div>
    );
};

export default Catalog;
