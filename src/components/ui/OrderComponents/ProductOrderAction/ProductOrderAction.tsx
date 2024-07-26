"use client";

import Button from "@/components/common/Button/Button";
import style from "./productOrderAction.module.scss";
import { FC } from "react";
import { IProduct } from "@/ts/models/IProduct";
import PriceView from "@/components/common/PriceView/PriceView";
import DeliveryView from "@/components/common/DeliveryView/DeliveryView";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { useRouter } from "next/navigation";
import { APP_PAGES } from "@/constants/page-url.config.constants";

const ProductOrderAction: FC<{ product: IProduct }> = ({ product }) => {
    const router = useRouter();
    const { setProduct } = useActions();

    const handleSubmit = () => {
        setProduct(product);
        router.push(APP_PAGES.ORDER);
    };

    return (
        <div className={style.component}>
            <Button className={style.action} onClick={handleSubmit}>
                <div>
                    <DeliveryView days={product.delivery} />
                </div>
                <div>К оформлению</div>
                <div>
                    <PriceView price={product.price} />
                </div>
            </Button>
        </div>
    );
};

export default ProductOrderAction;
