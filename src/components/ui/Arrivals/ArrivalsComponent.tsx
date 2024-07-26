"use client";

import { FC } from "react";
import { CatalogType, IProduct } from "@/ts/models/IProduct";
import style from "./arrivals.module.scss";
import Button from "@/components/common/Button/Button";
import { useRouter } from "next/navigation";
import ArivalsSlider from "./ArivalsSlider/ArivalsSlider";

interface ArrivalsComponentProps {
    products: IProduct[];
    categoryName: string;
    catalog: CatalogType;
    pageUrl: string;
}

const ArrivalsComponent: FC<ArrivalsComponentProps> = ({
    products,
    categoryName,
    pageUrl,
    catalog
}) => {
    const router = useRouter();

    return (
        <div className={style.arrivals_component}>
            <div className={style.title}>
                Новые поступления. <span>{categoryName}</span>
            </div>

            <div>
                <ArivalsSlider {...{ products }} />
            </div>

            <Button
                className={style.action}
                onClick={() => router.push(`${pageUrl}?catalog=${catalog}`)}
            >
                Посмотреть все
            </Button>
        </div>
    );
};

export default ArrivalsComponent;
