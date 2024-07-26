"use client";

import ComponentContainer from "@/components/common/ComponentContainer/ComponentContainer";
import style from "./orderPage.module.scss";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import ProductComponent from "@/components/ui/Product/ProductComponent/ProductComponent";
import OrderSizeSlider from "@/components/ui/OrderComponents/OrderSizeSlider/OrderSizeSliderComponent/OrderSizeSlider";
import OrderDeliveryComponent from "@/components/ui/OrderComponents/OrderDelivery/OrderDeliveryComponent/OrderDeliveryComponent";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/common/Button/Button";
import PriceView from "@/components/common/PriceView/PriceView";
import { deliveryPrice } from "@/data/app.data";
import { OrderFormType } from "@/ts/types/app.types";
import { useRouter } from "next/navigation";
import { APP_PAGES } from "@/constants/page-url.config.constants";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { useEffect } from "react";

const OrderPage = () => {
    const router = useRouter();
    const { form } = useAppSelector((state) => state.order);
    const { setOrderForm, setFormError, setPriceTotal } = useActions();
    const { handleSubmit, control } = useForm<OrderFormType>({
        values: form
    });

    useEffect(() => {
        setFormError(true);
    }, []);

    const onSubmitForm: SubmitHandler<OrderFormType> = (data) => {
        if (!data) return;
        setOrderForm(data);
        setFormError(false);
        if (form.product?.price) {
            setPriceTotal(deliveryPrice + form.product.price);
        }

        router.push(APP_PAGES.PAYMENT);
    };

    return (
        <section className={style.component}>
            <ComponentContainer>
                <div className={style.container}>
                    <div className={style.component_wrap}>
                        <div className={style.title}>Оформление заказа</div>

                        {form.product ? (
                            <form
                                className={style.order_form}
                                onSubmit={handleSubmit(onSubmitForm)}
                            >
                                <Controller
                                    control={control}
                                    name="product"
                                    rules={{
                                        required: "Обезательно к заполнению"
                                    }}
                                    render={({ field: { value } }) => (
                                        <>
                                            {!!value && (
                                                <ProductComponent.Order
                                                    product={value}
                                                />
                                            )}
                                        </>
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="size"
                                    rules={{
                                        required: "Обезательно к заполнению"
                                    }}
                                    render={({
                                        field: { onChange, value },
                                        fieldState: { error }
                                    }) => (
                                        <OrderSizeSlider
                                            {...{
                                                onChange,
                                                value,
                                                catalog: form.product?.catalog,
                                                error: error?.message
                                            }}
                                        />
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name="addressPoint"
                                    rules={{
                                        required: "Обезательно к заполнению"
                                    }}
                                    render={({
                                        field: { value, onChange },
                                        fieldState: { error }
                                    }) => (
                                        <OrderDeliveryComponent
                                            {...{
                                                value,
                                                onChange,
                                                error: error?.message
                                            }}
                                        />
                                    )}
                                />

                                <div className={style.form_info}>
                                    <div className={style.form_info_price}>
                                        <div>Товар</div>
                                        <div>
                                            <PriceView
                                                price={form.product.price}
                                            />
                                        </div>
                                    </div>
                                    <div className={style.form_info_price}>
                                        <div>Доставка</div>
                                        <div>
                                            &#8776;{" "}
                                            <PriceView price={deliveryPrice} />
                                        </div>
                                    </div>
                                </div>

                                <Button className={style.form_action}>
                                    Оплатить{" "}
                                    <PriceView
                                        price={
                                            deliveryPrice + form.product.price
                                        }
                                    />
                                </Button>
                            </form>
                        ) : (
                            <div className={style.no_content}>
                                Товар не выбран
                            </div>
                        )}
                    </div>
                </div>
            </ComponentContainer>
        </section>
    );
};

export default OrderPage;
