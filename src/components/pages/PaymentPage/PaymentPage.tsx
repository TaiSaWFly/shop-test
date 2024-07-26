"use client";

import ProductComponent from "@/components/ui/Product/ProductComponent/ProductComponent";
import style from "./paymentPage.module.scss";
import { APP_PAGES } from "@/constants/page-url.config.constants";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import PriceView from "@/components/common/PriceView/PriceView";
import ComponentContainer from "@/components/common/ComponentContainer/ComponentContainer";
import PaymentReceipt from "@/components/ui/PaymentComponents/PaymentReceipt/PaymentReceipt";

const PaymentPage = () => {
    const router = useRouter();
    const { error, form, priceTotal } = useAppSelector((state) => state.order);

    useEffect(() => {
        error &&
            form.product &&
            priceTotal === 0 &&
            router.push(APP_PAGES.ORDER);
    }, []);

    return (
        <div className={style.component}>
            <ComponentContainer>
                {!error && !!form.product && (
                    <div className={style.container}>
                        <div className={style.component_wrap}>
                            <div className={style.title}>Оплата заказа</div>

                            <ProductComponent.Order product={form.product} />

                            <div className={style.description_info}>
                                <div className={style.identifier_description}>
                                    Идентификатор платежа: 456342
                                </div>

                                <div className={style.description_price}>
                                    Переведите <PriceView price={priceTotal} />{" "}
                                    по номеру телефона
                                </div>
                            </div>

                            <PaymentReceipt form={form} />
                        </div>
                    </div>
                )}
            </ComponentContainer>
        </div>
    );
};

export default PaymentPage;
