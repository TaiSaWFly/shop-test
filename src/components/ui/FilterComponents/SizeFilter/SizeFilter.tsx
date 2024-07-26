"use client";

import { FC, useEffect, useState } from "react";
import style from "./sizeFilter.module.scss";
import { CatalogType } from "@/ts/models/IProduct";
import { ISizeProduct } from "@/ts/models/ISizeProduct";
import { shemaCatalogSizes } from "@/data/sizes.data/shemaCatalog.sizes";
import { SizeFilterDataType } from "@/ts/types/app.types";
import ComponentSizeFilter from "./ComponentSizeFilter";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";
import SizeFilterMobile from "./SizeFilterMobile";

interface SizeFilterCopmonents {
    Mobile: FC<SizeFilterProps>;
}

export interface SizeFilterProps {
    catalog: CatalogType;
}

const SizeFilter: FC<SizeFilterProps> & SizeFilterCopmonents = ({
    catalog
}) => {
    const { size } = useAppSelector((state) => state.filter);
    const { setSize } = useActions();

    const [sizesData, setSizesData] = useState<ISizeProduct[]>([]);
    const [sizeName, setSizeName] = useState<SizeFilterDataType>(size);
    const handleChange = (value: string) => setSizeName(value);

    useEffect(() => {
        setSizesData(shemaCatalogSizes[catalog]);
    }, [catalog]);

    useEffect(() => {
        setSize(sizeName);
    }, [sizeName]);

    useEffect(() => {
        setSizeName(size);
    }, [size]);

    if (sizesData.length === 0) return null;

    return (
        <div>
            <ComponentSizeFilter
                className={style.component_filter}
                sizeName={sizeName}
                sizesData={sizesData}
                onChange={handleChange}
            />
        </div>
    );
};

SizeFilter.Mobile = SizeFilterMobile;
export default SizeFilter;
