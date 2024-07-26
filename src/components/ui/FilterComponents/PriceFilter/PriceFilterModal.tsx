import { FC, useEffect, useState } from "react";
import style from "./priceFilter.module.scss";
import { PriceFilterProps } from "./PriceFilter";
import { initialStatePriceFilter } from "@/data/initialState.data";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { PriceFilterDataType, FormChangeArgsType } from "@/ts/types/app.types";
import FilterActions from "../FilterActions/FilterActions";
import ComponentPriceFilter from "./ComponentPriceFilter";

const PriceFilterModal: FC<
    {
        setShow: () => void;
        isShow: boolean;
    } & PriceFilterProps
> = ({ isShow, setShow, priceInfo }) => {
    const { price } = useAppSelector((state) => state.filter);
    const { setPrice } = useActions();
    const [data, setData] = useState<PriceFilterDataType>(price);

    useEffect(() => {
        if (!isShow) {
            setPrice(data);
        }
    }, [data]);

    const handleChange = (target: FormChangeArgsType<string, string>) => {
        setData((prevStare) => ({
            ...prevStare,
            [target.name]: target.value.replace(/[^0-9]/g, "")
        }));
    };

    const handleResetFilter = () => {
        setData(initialStatePriceFilter);
    };

    const handleSubmitFilter = () => {
        setPrice(data);
        setShow();
    };

    return (
        <>
            <ComponentPriceFilter
                className={style.component_filter__mobile}
                data={data}
                onChange={handleChange}
                priceFrom={priceInfo.priceFromInfo}
                priceTo={priceInfo.priceToInfo}
            />

            <FilterActions
                onResetFilter={handleResetFilter}
                onSubmitFilter={handleSubmitFilter}
            />
        </>
    );
};

export default PriceFilterModal;
