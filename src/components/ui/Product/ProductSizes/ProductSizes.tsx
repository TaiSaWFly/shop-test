"use client";

import { FC, useEffect, useState } from "react";
import style from "./productSizes.module.scss";
import { ISizeProduct } from "@/ts/models/ISizeProduct";
import SizesView from "@/components/common/SizesView/SizesView";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { CatalogType } from "@/ts/models/IProduct";
import { shemaCatalogSizes } from "@/data/sizes.data/shemaCatalog.sizes";

const ProductSizes: FC<{ catalog: CatalogType }> = ({ catalog }) => {
    const { setOrderSize } = useActions();
    const [sizeName, setSizeName] = useState("");
    const [sizesData, setSizesData] = useState<ISizeProduct[]>([]);

    useEffect(() => {
        setSizesData(shemaCatalogSizes[catalog]);
        if (catalog === "accessory") {
            setSizeName("1");
        }
    }, []);

    useEffect(() => {
        setOrderSize(sizeName);
    }, [sizeName]);

    return (
        <div className={style.component}>
            <div className={style.sizes_info__description}>
                {catalog !== "cloth" && catalog !== "accessory" && (
                    <div className={style.sizes_info}>
                        *Бирка на ваших кросовках поможет выбрать правильный
                        размер.
                    </div>
                )}

                {catalog !== "accessory" && (
                    <div className={style.sizes_title}>
                        Выберите размер (EU)
                    </div>
                )}

                {catalog !== "cloth" && catalog !== "accessory" && (
                    <div className={style.sizes_description}>
                        Размер лучше посмотреть на язычке ваших кроссовок или
                        измерить стельку.
                    </div>
                )}
            </div>

            {sizesData.length !== 0 && (
                <SizesView
                    {...{ sizeName, sizes: sizesData, onChange: setSizeName }}
                />
            )}
        </div>
    );
};

export default ProductSizes;
