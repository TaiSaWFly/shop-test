"use client";

import style from "./priceFilter.module.scss";
import { FC, useEffect, useState } from "react";
import {
    FormChangeArgsType,
    PriceFilterDataType,
    PriceInfoType
} from "@/ts/types/app.types";
import ComponentPriceFilter from "./ComponentPriceFilter";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import PriceFilterMobile from "./PriceFilterMobile";

interface PriceFilterComponents {
    Mobile: FC<PriceFilterProps>;
}

export interface PriceFilterProps {
    priceInfo: PriceInfoType;
}

const PriceFilter: FC<PriceFilterProps> & PriceFilterComponents = ({
    priceInfo
}) => {
    const { price } = useAppSelector((state) => state.filter);
    const { setPrice } = useActions();
    const [data, setData] = useState<PriceFilterDataType>(price);

    const handleChange = (target: FormChangeArgsType<string, string>) => {
        setData((prevStare) => ({
            ...prevStare,
            [target.name]: target.value.replace(/[^0-9]/g, "")
        }));
    };

    useEffect(() => {
        setPrice(data);
    }, [data]);

    useEffect(() => {
        setData(price);
    }, [price]);

    return (
        <div>
            <ComponentPriceFilter
                className={style.component_filter}
                data={price}
                onChange={handleChange}
                priceFrom={priceInfo.priceFromInfo}
                priceTo={priceInfo.priceToInfo}
            />
        </div>
    );
};

PriceFilter.Mobile = PriceFilterMobile;
export default PriceFilter;
