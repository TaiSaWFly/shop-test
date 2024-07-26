"use client";

import { FC, useEffect, useState } from "react";
import style from "./brandFilter.module.scss";
import { CatalogType } from "@/ts/models/IProduct";
import { IBrandProduct } from "@/ts/models/IBrandProduct";
import { shemaCatalogBrands } from "@/data/brand.data/shemaCatalog.brands";
import { BrandFilterDataType, FormChangeArgsType } from "@/ts/types/app.types";
import ComponentBrandFilter from "./ComponentBrandFilter";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import BrandFilterMobile from "./BrandFilterMobile";

interface BrandFilterComponents {
    Mobile: FC<BrandFilterProps>;
}

export interface BrandFilterProps {
    catalog: CatalogType;
}

const BrandFilter: FC<BrandFilterProps> & BrandFilterComponents = ({
    catalog
}) => {
    const { brand } = useAppSelector((state) => state.filter);
    const { setBrand } = useActions();

    const [brandsData, setBrandsData] = useState<IBrandProduct[]>([]);
    const [brandName, setBrandName] = useState<BrandFilterDataType>(brand);
    const handleChange = (target: FormChangeArgsType<string, boolean>) => {
        setBrandName(target.value ? target.name : "");
    };

    useEffect(() => {
        setBrandsData(shemaCatalogBrands[catalog]);
    }, [catalog]);

    useEffect(() => {
        setBrand(brandName);
    }, [brandName]);

    useEffect(() => {
        setBrandName(brand);
    }, [brand]);

    if (brandsData.length === 0) return null;

    const activeBrand =
        brandName !== ""
            ? brandsData.filter((brand) => brand.brand_name === brandName)
            : brandsData;

    return (
        <div>
            <ComponentBrandFilter
                className={style.component_filter}
                brandsData={activeBrand}
                brandName={brandName}
                onChange={handleChange}
            />
        </div>
    );
};

BrandFilter.Mobile = BrandFilterMobile;
export default BrandFilter;
