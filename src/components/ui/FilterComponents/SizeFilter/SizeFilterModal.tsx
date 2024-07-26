"use client";

import { FC, useEffect, useState } from "react";
import style from "./sizeFilter.module.scss";
import { ISizeProduct } from "@/ts/models/ISizeProduct";
import SizesView from "@/components/common/SizesView/SizesView";
import { initialStateSizeFilter } from "@/data/initialState.data";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { SizeFilterDataType } from "@/ts/types/app.types";
import FilterActions from "../FilterActions/FilterActions";

const SizeFilterModal: FC<{
    setShow: () => void;
    isShow: boolean;
    sizesData: ISizeProduct[];
}> = ({ isShow, setShow, sizesData }) => {
    const { size } = useAppSelector((state) => state.filter);
    const { setSize } = useActions();
    const [sizeName, setSizeName] = useState<SizeFilterDataType>(size);

    useEffect(() => {
        if (!isShow) {
            setSize(sizeName);
        }
    }, [sizeName]);

    const handleChange = (value: string) => setSizeName(value);

    const handleResetFilter = () => {
        setSizeName(initialStateSizeFilter);
    };

    const handleSubmitFilter = () => {
        setSize(sizeName);
        setShow();
    };

    return (
        <>
            <div>
                <div className={style.title}>Размер</div>
                <span className={style.subtitle}>EU</span>

                <SizesView
                    className={style.component_filter__mobile}
                    sizeName={sizeName}
                    sizes={sizesData}
                    onChange={handleChange}
                />
            </div>
            <div>
                <FilterActions
                    onResetFilter={handleResetFilter}
                    onSubmitFilter={handleSubmitFilter}
                />
            </div>
        </>
    );
};

export default SizeFilterModal;
